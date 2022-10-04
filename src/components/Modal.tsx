import ReactModal from 'react-modal';
import { MdCheckCircleOutline, MdOutlineCancel } from 'react-icons/md';
import { toast } from 'react-toastify';
import {
  ModalTitle,
  ModalInnerWrap,
  ModalSubtitle,
  ModalBtnWrap,
} from '../assets/styles';
import { useMutation } from '@apollo/client';
import { DELETE_CONTACT } from '../config/queries';
import { MyContext } from '../constant';
import { useContext } from 'react';

interface Props {
  modalIsOpen: boolean;
  closeModal: (value: any) => void;
  id: number | string;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#F5FFF7',
  },
};

const Modal: React.FC<Props> = ({ modalIsOpen, closeModal, id }) => {
  const Ctx = useContext(MyContext);
  const [deleteContactMutation] = useMutation(DELETE_CONTACT);

  const handleDelete = () => {
    deleteContactMutation({
      variables: {
        id: id,
      },
    })
      .then((ok) => {
        if (ok) {
          closeModal(true);
          const fav = localStorage.getItem('favourite');
          let arr: any[] = [];
          if (fav) {
            arr = JSON.parse(fav);
          }
          const favourite: any = [];
          let check = false;
          for (const elx of arr) {
            if (elx.id === id) {
              check = true;
            }
          }
          if (check === true) {
            for (const elx of arr) {
              if (elx.id !== id) {
                favourite.push(elx);
              }
            }
            localStorage.setItem('favourite', JSON.stringify(favourite));
            Ctx?.setFavourite(favourite);
          } else {
            localStorage.setItem('favourite', JSON.stringify(arr));
            Ctx?.setFavourite(arr);
          }
          toast.success('Success Delete Contact', { autoClose: 2000 });
        }
      })
      .catch((err) => {
        if (err) {
          toast.error('Failed Delete Contact', { autoClose: 2000 });
        }
      });
  };

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalTitle>Are you sure want to delete?</ModalTitle>
      <ModalInnerWrap>
        <ModalSubtitle>Your will lost your data</ModalSubtitle>
        <ModalBtnWrap>
          <MdCheckCircleOutline
            size={35}
            color="#FE7180"
            onClick={() => handleDelete()}
          />
          <MdOutlineCancel onClick={closeModal} size={35} color="#90ECA4" />
        </ModalBtnWrap>
      </ModalInnerWrap>
    </ReactModal>
  );
};

export default Modal;
