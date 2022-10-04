import SideBar from '../components/SideBar';
import { ADD_CONTACT_LIST } from '../config/queries';
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Inputs } from '../assets/types';
import {
  MdOutlinePersonPin,
  MdOutlinePermPhoneMsg,
  MdOutlineAddIcCall,
  MdOutlineRemoveCircleOutline,
} from 'react-icons/md';
import {
  InputForm,
  PageTitleWrapper,
  PageTitle,
  InputContactWrapper,
  InputIconWrapper,
  TitleAndInputWrapper,
  TitleInput,
  ButtonAddNumber,
  ButtonRemoveNumber,
  ErrorMesage,
  InputWrapWithBtn,
  TitleAndInputNumberWrapper,
  InputWrap,
  AddButton,
  AddText,
  SelectOption,
  ListTableWrap,
} from '../assets/styles';
import { useMutation } from '@apollo/client';
import React from 'react';

const defaultValues = {
  first_name: '',
  last_name: '',
  phones: [{ number: '', zone: '+62' }],
};

const Add: React.FC = () => {
  const [addContactMutation] = useMutation(ADD_CONTACT_LIST);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: defaultValues,
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const contactNum: any = [];
    const numbers = data?.phones;

    if (numbers) {
      for (const num of numbers) {
        contactNum.push({ number: `${num.zone}${num.number}` });
      }
    }

    const input = { ...data, phones: contactNum };
    addContactMutation({
      variables: input,
    })
      .then((ok) => {
        if (ok) {
          reset();
          toast.success('Success Create Contact', { autoClose: 2000 });
        }
      })
      .catch((error) => {
        toast.error('Failed Create Contact, please try again', {
          autoClose: 2000,
        });
      });
  };

  const { fields, append, remove } = useFieldArray({ name: 'phones', control });

  const handleAddNumber = () => append({ number: '' });
  const handleRemoveNumber = (index: number) => remove(index);

  return (
    <SideBar>
      <PageTitleWrapper>
        <PageTitle>Create Contact</PageTitle>
      </PageTitleWrapper>
      <ListTableWrap>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContactWrapper>
            <InputIconWrapper>
              <MdOutlinePersonPin size={30} color="#90EBA3" />
            </InputIconWrapper>
            <TitleAndInputWrapper>
              <TitleInput>First Name</TitleInput>
              <InputForm
                type="text"
                {...register('first_name', {
                  required: true,
                })}
              />
              {errors?.first_name?.type === 'required' && (
                <ErrorMesage>This field is required</ErrorMesage>
              )}
              <TitleInput>Last Name</TitleInput>
              <InputForm
                type="text"
                {...register('last_name', {
                  required: true,
                })}
              />
              {errors?.last_name?.type === 'required' && (
                <ErrorMesage>This field is required</ErrorMesage>
              )}
            </TitleAndInputWrapper>
          </InputContactWrapper>
          <InputContactWrapper>
            <InputIconWrapper>
              <MdOutlinePermPhoneMsg size={30} color="#90EBA3" />
            </InputIconWrapper>
            <TitleAndInputWrapper>
              <TitleInput>Number</TitleInput>
              {fields?.map((_, idx) => {
                return (
                  <TitleAndInputNumberWrapper key={idx}>
                    <TitleAndInputWrapper>
                      <InputWrapWithBtn>
                        <SelectOption
                          {...register(`phones.${idx}.zone`, {
                            required: true,
                          })}
                        >
                          <option value="+62">+62</option>
                          <option value="+61">+61</option>
                          <option value="+60">+60</option>
                        </SelectOption>
                        <InputWrap>
                          <InputForm
                            type="number"
                            {...register(`phones.${idx}.number`, {
                              required: true,
                            })}
                          />
                          {errors?.phones?.[idx]?.number?.type ===
                            'required' && (
                            <ErrorMesage>This field is required</ErrorMesage>
                          )}
                        </InputWrap>
                      </InputWrapWithBtn>
                    </TitleAndInputWrapper>
                    <ButtonAddNumber onClick={handleAddNumber}>
                      <MdOutlineAddIcCall color="#ffff" size={20} />
                    </ButtonAddNumber>
                    <ButtonRemoveNumber
                      onClick={() => handleRemoveNumber(idx)}
                      disabled={fields?.length === 1}
                    >
                      <MdOutlineRemoveCircleOutline color="#ffff" size={20} />
                    </ButtonRemoveNumber>
                  </TitleAndInputNumberWrapper>
                );
              })}
            </TitleAndInputWrapper>
          </InputContactWrapper>
        </form>
      </ListTableWrap>
      <AddButton onClick={handleSubmit(onSubmit)}>
        <AddText>C r e a t e</AddText>
      </AddButton>
    </SideBar>
  );
};
export default Add;
