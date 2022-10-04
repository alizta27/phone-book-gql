import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #f5fff7;
  gap: 1px;
`;
export const LogoWrap = styled.div`
  margin-bottom: -30px;
`;
export const SideBarWrapperMobile = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 1px;
  padding: 0px 1% 0px; 1%;
`;
export const SideBarItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  justify-content: space-between;
  margin-top: 2%;
  margin-bottom: 2%;
`;
export const SideBarItemWrapperMobile = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
  justify-content: space-between;
  margin-top: 2%;
  margin-bottom: 2%;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #8feba3;
  border-radius: 10px;
  width: 85%;
  height: 80px;
  padding: 0px 10px 0px 10px;
  text-align: center;
  -webkit-box-shadow: 0px 15px 38px -11px rgba(30, 255, 0, 1);
  -moz-box-shadow: 0px 15px 38px -11px rgba(30, 255, 0, 1);
  box-shadow: 0px 15px 38px -11px rgba(30, 255, 0, 1);
`;
export const IconWrapperSecondary = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px 0px 10px;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  background-color: #ffff;
  border-radius: 10px;
  width: 85%;
  height: 80px;
`;
export const ItemWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
`;
export const ItemWrapperMobile = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
  padding-left: 20px;
`;
export const ItemName = styled.p`
  font-weight: 900;
  color: #1e3b49;
  margin: 0px;
  font-family: 'Nunito Sans', sans-serif;
`;
export const ItemNameSecondary = styled.p`
  font-weight: bold;
  color: #c7c5dd;
  margin: 0px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  width: 100%;
  padding: 3%;
  background-color: #ffffff;
  margin: 1%;
  box-shadow: -3px 0px 18px -6px rgba(130, 130, 130, 0.39);
  -webkit-box-shadow: -3px 0px 18px -6px rgba(130, 130, 130, 0.39);
  -moz-box-shadow: -3px 0px 18px -6px rgba(130, 130, 130, 0.39);
`;

export const Search = styled.div`
  display: flex;
  padding: 1%;
  gap: 10px;
  border-radius: 5px;
  align-items: center;
  background-color: #f4f5f9;
  margin-bottom: 5px;
`;
export const InputSearch = styled.input`
  background-color: #f4f5f9;
  width: 100%;
  border: 0px;
  border-radius: 5px;
  border-color: #f4f5f9;
  :focus {
    outline: none !important;
  }
  ::placeholder {
    color: #8987ab;
  }
`;

export const ListTableWrap = styled.div`
  overflow-y: auto;
  height: 100vh;
  width: 100%;
`;

export const Wrapper = styled.div`
  padding: 0;
  display: flex;
  background-color: #eaffef;
  margin: 3% 3% 3% 0px;
  border-radius: 20px;
  width: 100%;
`;
export const NavBarLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 80px;
`;
export const InputForm = styled.input`
  width: 100%;
  height: 100%;
  border-bottom: 2px solid #90eca4;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  :focus {
    outline: none !important;
  }
`;
export const PageTitleWrapper = styled.div`
  display: flex;
  padding: 1%;
  gap: 10px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
export const PageTitle = styled.p`
  font-weight: 900;
  color: #1e3b49;
  margin: 0px;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 24px;
`;
export const InputContactWrapper = styled.div`
  display: flex;
  padding: 10px;
  gap: 20px;
  flex-direction: row;
  border-radius: 50px 50px 50px 50px;
  align-items: center;
  margin-bottom: 5px;
`;
export const InputIconWrapper = styled.div`
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffff;
  box-shadow: 0px 0px 22px 4px rgba(140, 235, 159, 0.58);
  -webkit-box-shadow: 0px 0px 22px 4px rgba(140, 235, 159, 0.58);
  -moz-box-shadow: 0px 0px 22px 4px rgba(140, 235, 159, 0.58);
  flex-shrink: 1;
`;

export const TitleAndInputWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0px 10px 0px 0px;
  align-items: left;
`;
export const TitleAndInputNumberWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0px 10px 0px 0px;
  align-items: left;
`;
export const TitleInput = styled.p`
  font-weight: 700;
  color: #1e3b49;
  margin: 0px;
  font-family: 'Nunito Sans', sans-serif;
`;
export const ButtonAddNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px solid #ff7182;
  border-radius: 100%;
  height: 35px;
  width: 35px;
  background-color: #90eaa2;
`;
export const ButtonRemoveNumber = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px solid #ff7182;
  border-radius: 100%;
  height: 35px;
  width: 35px;
  background-color: #ff7182;
  :disabled {
    background-color: #fbd2d8;
    border: 0px solid #fbd2d8;
    color: #f2f3f8;
  }
`;
export const ErrorMesage = styled.p`
  font-size: 12px;
  color: red;
  margin-top: 0px;
  margin-bottom: 0px;
`;
export const InputWrapWithBtn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const SelectOption = styled.select`
  border-color: transparent;
  background-color: transparent;
  onSelect {
    border-color: transparent;
    background-color: transparent;
  }
  onActive {
    border-color: transparent;
    background-color: transparent;
  }
`;
export const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  align-self: center;
  width: 50%;
  cursor: pointer;
  background-color: #8feaa1;
  box-shadow: 0px 0px 22px 4px rgba(140, 235, 159, 0.58);
  -webkit-box-shadow: 0px 0px 22px 4px rgba(140, 235, 159, 0.58);
  -moz-box-shadow: 0px 0px 22px 4px rgba(140, 235, 159, 0.58);
`;
export const AddText = styled.p`
  font-weight: 900;
  color: #ffff;
  font-family: 'Nunito Sans', sans-serif;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const DetailWrapper = styled.div`
  display: flex;
  width: 50%;
  right: 0;
  height: 100%;
  background-color: #262626;
  position: absolute;
  flex-direction: column;
  gap: 10px;
`;
export const TitleDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #262626;
  padding: 0px 10px 0px 10px;
  align-items: center;
`;
export const ContactInfo = styled.p`
  color: #f2f2f2;
`;
export const CloseBtn = styled.p`
  color: #f2f2f2;
`;
export const CloseBtnWrapper = styled.div`
  width: 25px;
  height: 25px;
  background-color: #ff7944;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    box-shadow: -1px 15px 24px -6px rgba(237, 135, 77, 0.45);
    -webkit-box-shadow: -1px 15px 24px -6px rgba(237, 135, 77, 0.45);
    -moz-box-shadow: -1px 15px 24px -6px rgba(237, 135, 77, 0.45);
  }
`;
export const ProfilerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;
export const ImageProfile = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-image: url('https://media.istockphoto.com/vectors/default-avatar-photo-placeholder-icon-grey-profile-picture-business-vector-id1327592449?k=20&m=1327592449&s=612x612&w=0&h=6yFQPGaxmMLgoEKibnVSRIEnnBgelAeIAf8FqpLBNww=');
  background-position: center;
  background-size: cover;
`;
export const FullName = styled.p`
  color: #f2f2f2;
  margin: 0px;
`;
export const Status = styled.p`
  color: #b48426;
  margin: 0px;
`;
export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #3b3b3b;
  align-items: center;
  gap: 2px;
  padding-bottom: 20px;
  width: 100%;
`;
export const ListInfoWrapper = styled.div`
  color: #fff;
`;
export const NumberInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d8e2dc;
  border-radius: 10px;
  margin-top: 10px;
  padding: 0px;
`;
export const BtnPrev = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d8e2dc;
  border-color: #ece4db;
  border-radius: 10px 0px 0px 10px;
  color: #f8edeb;
`;
export const BtnNext = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d8e2dc;
  border-color: #ece4db;
  border-radius: 0px 10px 10px 0px;
  color: #f8edeb;
`;
export const PaginationInfo = styled.p`
  color: #1f363d;
  margin: 0px;
  font-family: monospace;
`;
export const CheckBoxItem = styled.div`
  display: flex;
  margin: 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
`;
export const SelectDelete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  border: 1px solid;
  padding: 1px;
  border-radius: 3px;
`;
export const DeleteText = styled.p`
  margin: 0px;
`;
export const SelectFavourite = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  border: 1px solid;
  padding: 1px;
  border-radius: 3px;
`;

export const TableList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5em;
`;
export const ListWrapItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`;
export const ItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;
export const WrapFavDel = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 30px;
  margin: 0px;
  gap: 0.5em;
  width: 50%;
`;
export const WrapTableItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const ImgContact = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 10px;
`;
export const PhotoWrapper = styled.div``;
export const ContactName = styled.p`
  font-weight: 700;
  color: #1e3b49;
  margin: 0px;
  font-family: 'Nunito Sans', sans-serif;
`;
export const ContactNumber = styled.p`
  color: #8987ab;
  margin: 0px;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
  font-size: 13px;
`;
export const ModalTitle = styled.p`
  font-weight: 900;
  color: #1e3b49;
  margin: 0px;
  font-family: 'Nunito Sans', sans-serif;
`;
export const ModalInnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const ModalSubtitle = styled.p`
  font-weight: 400;
  color: #1e3b49;
  margin: 0px;
  font-family: 'Nunito Sans', sans-serif;
`;
export const ModalBtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;
export const EmptyData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 100px;
`;
