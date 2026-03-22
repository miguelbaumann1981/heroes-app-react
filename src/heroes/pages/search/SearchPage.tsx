import { CustomJumbotron } from '@/components/ui/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from './ui/SearchControls';
import { CustomBreadcrumbs } from '@/components/ui/custom/CustomBreadcrumbs';

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title='Superhero Search'
        description='Search a superhero...'
      />

      {/* Breadcrumbs */}
      <CustomBreadcrumbs currentPage='Searcher Heroes' />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filter and search */}
      <SearchControls />
    </>
  );
};

export default SearchPage;
