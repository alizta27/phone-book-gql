import SideBar from '../components/SideBar';
import { FaSearch } from 'react-icons/fa';
import ListContact from '../components/ListContact';
import Modal from '../components/Modal';
import { useState } from 'react';
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

const Home: React.FC = () => {
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
              <ListContact
                error={el?.error}
                contact={el?.contact}
                openModal={openModal}
                loading={el?.loading}
                limit={limit}
                skip={skip}
              />
            </ListTableWrap>
            <Pagination>
              <BtnPrev
                onClick={() => {
                  if (el?.total) {
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
                Showing {limit < (el?.total || 10) ? limit : el?.total} contact
                of {el?.total}{' '}
              </PaginationInfo>
              <BtnNext
                onClick={() => {
                  if (el?.total) {
                    let tmpLimit = 0;
                    if (limit + 10 > el?.total) {
                      tmpLimit = el?.total;
                      setLimit(tmpLimit);
                    } else {
                      setLimit(skip + 10);
                    }
                    if (skip + 10 > el?.total) {
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
export default Home;
