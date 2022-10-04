import SideBar from '../components/SideBar';
import { FaSearch } from 'react-icons/fa';
import ListFavourite from '../components/ListFavourite';
import { useState } from 'react';
import Modal from '../components/Modal';
import {
  InnerWrapper,
  Search,
  InputSearch,
  ListTableWrap,
  Pagination,
  BtnNext,
  BtnPrev,
  PaginationInfo,
} from '../assets/styles';
import { MyContext } from '../constant';

const Fafourite: React.FC = () => {
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<number | string>(0);

  function openModal(id: number | string) {
    setIsOpen(true);
    setDeleteId(id);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <SideBar>
      <MyContext.Consumer>
        {(el) => (
          <InnerWrapper>
            <Search
              onChange={(event) => {
                const target = event.target as HTMLInputElement;
                el?.setSearch(target.value);
              }}
            >
              <div>
                <FaSearch color="#8987AB" />
              </div>
              <InputSearch placeholder="Search Contact Delivery" />
            </Search>
            <ListTableWrap>
              <ListFavourite
                error={el?.error}
                openModal={openModal}
                favourites={el?.favourite}
                loading={el?.loading}
                limit={limit}
                skip={skip}
              />
            </ListTableWrap>
            <Pagination>
              <BtnPrev
                onClick={() => {
                  if (el?.totalFav) {
                    if (limit - 10 < 10) {
                      setLimit(10);
                    } else {
                      setLimit(limit - 10);
                    }
                    if (skip - 10 < 0) {
                      setSkip(0);
                    } else {
                      setSkip(skip - 10);
                    }
                  }
                }}
              >
                {'<<<'}
              </BtnPrev>
              <PaginationInfo>
                Showing {limit < (el?.totalFav || 10) ? limit : el?.totalFav}{' '}
                contact of {el?.totalFav}{' '}
              </PaginationInfo>
              <BtnNext
                onClick={() => {
                  if (el?.total) {
                    let tmpLimit = 0;
                    if (limit + 10 > el?.totalFav) {
                      tmpLimit = el?.totalFav;
                      setLimit(tmpLimit);
                    } else {
                      setLimit(skip + 10);
                    }
                    if (skip + 10 > el?.totalFav) {
                      setSkip(skip);
                    } else {
                      setSkip(skip + 10);
                    }
                    setLimit(tmpLimit);
                  }
                }}
              >
                {'>>>'}
              </BtnNext>
            </Pagination>
            <Modal
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}
              id={deleteId}
            />
          </InnerWrapper>
        )}
      </MyContext.Consumer>
    </SideBar>
  );
};
export default Fafourite;
