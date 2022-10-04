import {
  TitleDetailWrapper,
  ProfilerWrapper,
  ImageProfile,
  ContactInfo,
  CloseBtn,
  CloseBtnWrapper,
  FullName,
  Status,
} from '../assets/styles'
import ContactInformation from '../components/ContactInformation'
import { GET_DETAIL } from '../config/queries'
import { useQuery } from '@apollo/client'
import { Contact } from '../assets/types'
import { useEffect, useState } from 'react'
import { MyContext } from '../constant'
import { useContext } from 'react'

const Detail: React.FC = () => {
  const Ctx = useContext(MyContext)
  const { loading, error, data, refetch } = useQuery<any>(GET_DETAIL, {
    variables: {
      id: ''
    }
  })
  const [isRead, setIsRead] = useState(true)

  useEffect(() => {
    const id = Ctx?.id
    if (id) {
      refetch({
        id: id
      })
    }
  }, [Ctx?.id, refetch])



  const DetailHeader = () => {
    return (
      <TitleDetailWrapper>
        <ContactInfo>Contact Info</ContactInfo>
        <CloseBtnWrapper>
          <CloseBtn onClick={() => Ctx?.setIsDetail(false)}>X</CloseBtn>
        </CloseBtnWrapper>
      </TitleDetailWrapper>
    )
  }

  if (loading) {
    return (
      <>
        <DetailHeader />
        <ProfilerWrapper>
          <h1>Loading..</h1>
        </ProfilerWrapper>
      </>
    )
  } else if (error) {
    return (
      <>
        <DetailHeader />
        <ProfilerWrapper>
          <h1>Error..</h1>
        </ProfilerWrapper>
      </>
    )
  } else {
    const info: Contact = data?.contact_by_pk
    return (
      <>
        <DetailHeader />
        <ProfilerWrapper>
          <ImageProfile></ImageProfile>
          <FullName>{`${info?.first_name} ${info?.last_name}`}</FullName>
          <Status>online</Status>
          <ContactInformation info={info} isRead={isRead} setIsRead={setIsRead} />
        </ProfilerWrapper>
      </>
    )
  }
}

export default Detail