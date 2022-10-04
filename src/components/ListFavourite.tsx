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
} from '../assets/styles';
import { Contact } from '../assets/types';
import { useContext } from 'react';
import { MdFavorite, MdDeleteForever } from 'react-icons/md';
import { MyContext } from '../constant';
interface Props {
  error?: any;
  loading?: boolean;
  limit: number;
  skip: number;
  favourites?: Contact[];
  openModal: any;
}

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
  };

  if (error) {
    return <p>Error</p>;
  } else if (loading) {
    return <p>Loading</p>;
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
          <p>No Data</p>
        </TableList>
      );
    }
  } else {
    return null;
  }
};

export default ListContact;
