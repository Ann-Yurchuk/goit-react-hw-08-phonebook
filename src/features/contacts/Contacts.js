import { ContactList } from './ContactList';
import { ContactsFilter } from './ContactsFilter';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from 'redux/contacts/contactsSelectors';
import { ContactForm } from 'components/ContactForm';
import { Section } from 'components/Section';
import { Layout } from 'components/Layout';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
        <Section title="Contacts">
          <ContactsFilter />
          <ContactList />
        </Section>
        <ToastContainer autoClose={3000} />
      </Layout>
    </>
  );
};
