import {
  ImgContact,
  ContactName,
  ContactNumber,
  TableList,
  PhotoWrapper,
  WrapTableItem,
  WrapFavDel,
  ListWrapItem,
  ItemInfo,
  EmptyData,
} from '../assets/styles';
import { Contact } from '../assets/types';
import { toast } from 'react-toastify';
import BarLoader from 'react-spinners/BarLoader';
import { useContext, CSSProperties } from 'react';
import { MdFavorite, MdDeleteForever, MdWorkOff } from 'react-icons/md';
import { MyContext } from '../constant';
interface Props {
  error?: any;
  loading?: boolean;
  limit: number;
  skip: number;
  favourites?: Contact[];
  openModal: any;
}

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: '#90ECA4',
  marginTop: '100px',
};

const ListContact: React.FC<Props> = ({
  error,
  loading,
  openModal,
  limit,
  skip,
  favourites,
}) => {
  const Ctx = useContext(MyContext);

  const handleFavourite = (id: number | string) => {
    let favourites: any[] = [];
    const fav = localStorage.getItem('favourite');
    if (fav) {
      favourites = JSON.parse(fav);
    }
    const arr: any[] = [];
    if (favourites) {
      for (const elx of favourites) {
        if (elx.id !== id) {
          arr.push(elx);
        }
      }
    }
    localStorage.setItem('favourite', JSON.stringify(arr));
    Ctx?.setFavourite(arr);
    toast.success('Success Remove Fafourite Contact', { autoClose: 2000 });
  };

  if (error) {
    return (
      <TableList>
        <EmptyData>
          <p>Oopss.. Something error</p>
        </EmptyData>
      </TableList>
    );
  } else if (loading) {
    return (
      <BarLoader
        color="#36d7b7"
        height={9}
        width={170}
        cssOverride={override}
      />
    );
  } else if (favourites) {
    favourites = favourites.sort((a: any, b: any) => {
      if (a.first_name.toLowerCase() < b.first_name.toLowerCase()) {
        return -1;
      }
      if (a.first_name.toLowerCase() > b.first_name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    favourites = favourites.slice(skip, limit);

    if (favourites.length) {
      return (
        <TableList>
          {favourites &&
            favourites?.map((item: any, idx) => {
              return (
                <ListWrapItem key={idx}>
                  <ItemInfo>
                    <PhotoWrapper>
                      <ImgContact
                        src="https://media.istockphoto.com/vectors/default-avatar-photo-placeholder-icon-grey-profile-picture-business-vector-id1327592449?k=20&m=1327592449&s=612x612&w=0&h=6yFQPGaxmMLgoEKibnVSRIEnnBgelAeIAf8FqpLBNww="
                        alt="contact"
                      />
                    </PhotoWrapper>
                    <WrapTableItem>
                      <ContactName>{`${item?.first_name} ${item?.last_name}`}</ContactName>
                      <ContactNumber>{item?.phones[0]?.number}</ContactNumber>
                    </WrapTableItem>
                  </ItemInfo>
                  <WrapFavDel>
                    <MdDeleteForever
                      color="#FA7383"
                      size={25}
                      onClick={() => openModal(item?.id)}
                    />
                    <MdFavorite
                      color="#90ECA4"
                      size={25}
                      onClick={() => handleFavourite(item?.id)}
                    />
                  </WrapFavDel>
                </ListWrapItem>
              );
            })}
        </TableList>
      );
    } else {
      return (
        <TableList>
          <EmptyData>
            <MdWorkOff color="#DEFFE5" size={200} />
          </EmptyData>
        </TableList>
      );
    }
  } else {
    return null;
  }
};

export default ListContact;
