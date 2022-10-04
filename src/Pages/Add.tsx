import SideBar from '../components/SideBar';
import { ADD_CONTACT_LIST } from '../config/queries';
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
import { Inputs } from '../assets/types';
import {
  InputForm,
  InnerWrapper,
  PageTitleWrapper,
  PageTitle,
  InputContactWrapper,
  InputIconWrapper0,
  InputIconWrapper1,
  InputIconWrapper2,
  TitleAndInputWrapper,
  TitleInput,
  ButtonAddNumber,
  ButtonRemoveNumber,
  ErrorMesage,
  InputWrapWithBtn,
  InputWrap,
  AddButton,
  AddText,
  SelectOption,
  ListTableWrap,
} from '../assets/styles';
import { useMutation } from '@apollo/client';

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
    console.log(input);
    addContactMutation({
      variables: input,
    })
      .then((ok) => {
        if (ok) {
          reset();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // if (data) {
  //   console.log(data);
  // } else if (error) {
  //   console.log(error)
  // } else if (loading) {
  //   console.log('loading');
  // }
  const { fields, append, remove } = useFieldArray({ name: 'phones', control });

  const handleAddNumber = () => append({ number: '' });
  const handleRemoveNumber = (index: number) => remove(index);

  return (
    <SideBar>
      <InnerWrapper>
        <PageTitleWrapper>
          <PageTitle>Create Contact</PageTitle>
        </PageTitleWrapper>
        <ListTableWrap>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputContactWrapper>
              <InputIconWrapper0>
                <p>icon</p>
              </InputIconWrapper0>
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
              </TitleAndInputWrapper>
            </InputContactWrapper>
            <InputContactWrapper>
              <InputIconWrapper1>
                <p>icon</p>
              </InputIconWrapper1>
              <TitleAndInputWrapper>
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
            {fields?.map((_, idx) => {
              return (
                <InputContactWrapper key={idx}>
                  <InputIconWrapper2>
                    <p>icon</p>
                  </InputIconWrapper2>
                  <TitleAndInputWrapper>
                    <TitleInput>Number</TitleInput>
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
                        {errors?.phones?.[idx]?.number?.type === 'required' && (
                          <ErrorMesage>This field is required</ErrorMesage>
                        )}
                      </InputWrap>
                    </InputWrapWithBtn>
                  </TitleAndInputWrapper>
                  <ButtonAddNumber onClick={handleAddNumber}>+</ButtonAddNumber>
                  <ButtonRemoveNumber
                    onClick={() => handleRemoveNumber(idx)}
                    disabled={fields?.length === 1}
                  >
                    -
                  </ButtonRemoveNumber>
                </InputContactWrapper>
              );
            })}
          </form>
        </ListTableWrap>
        <AddButton onClick={handleSubmit(onSubmit)}>
          <AddText>Create</AddText>
        </AddButton>
      </InnerWrapper>
    </SideBar>
  );
};
export default Add;
