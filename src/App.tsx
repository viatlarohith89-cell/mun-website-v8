import { useState } from 'react';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { CommitteesPage } from './components/CommitteesPage';
import { SecretariatPage } from './components/SecretariatPage';

type Page = 'home' | 'committees' | 'secretariat' | 'register';

const REGISTRATION_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdLrLMyDLWbbJ38rd-PKvGWT94HWYdJg_z44RfI6i5jWfKXhQ/viewform';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    if (page === 'register') {
      window.open(REGISTRATION_FORM_URL, '_blank', 'noopener,noreferrer');
      return;
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'committees':
        return <CommitteesPage />;
      case 'secretariat':
        return <SecretariatPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={handleNavigate}>
      {renderPage()}
    </Layout>
  );
}

export default App;
