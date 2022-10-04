import {
  ContactInfoWrapper,
  ListInfoWrapper,
  NumberInfo
} from '../assets/styles'
import { Contact } from '../assets/types'

interface Props {
  info: Contact
  isRead: boolean
  setIsRead: (value: boolean) => void
}

const ContactInformation: React.FC<Props> = ({ info, isRead, setIsRead }) => {
  return (
    <>
      <ContactInfoWrapper>
        <ListInfoWrapper>
          <p>Full Name</p>
          <input type="text" value={info?.first_name} readOnly={isRead} />
        </ListInfoWrapper>
        <ListInfoWrapper>
          <p>Last Name</p>
          <input type="text" value={info?.last_name} readOnly={isRead} />
        </ListInfoWrapper>
        <ListInfoWrapper>
          <p>Number</p>
          <NumberInfo>
            {
              info?.phones?.map(item => {
                return <input type="text" value={item?.number} readOnly={isRead} />
              })
            }
          </NumberInfo>
        </ListInfoWrapper>
      </ContactInfoWrapper>
    </>
  )
}
export default ContactInformation