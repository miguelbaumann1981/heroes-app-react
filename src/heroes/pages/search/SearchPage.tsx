import { CustomJumbotron } from '@/components/ui/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from './ui/SearchControls';
import { CustomBreadcrumbs } from '@/components/ui/custom/CustomBreadcrumbs';
import { HeroGrid } from '@/heroes/components/HeroGrid';
import { useQuery } from '@tanstack/react-query';
import { searchHeroesAction } from '@/heroes/actions/search-heroes.action';
import { useSearchParams } from 'react-router';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('name') ?? '';
  const selectedStrength = searchParams.get('strength') ?? undefined;

  const { data: heroesSearch } = useQuery({
    queryKey: ['search', { search, selectedStrength }],
    queryFn: () =>
      searchHeroesAction({ name: search, strength: selectedStrength }),
    staleTime: 1000 * 60 * 5,
  });

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

      {/* Results heroes */}
      <HeroGrid heroes={heroesSearch ?? []} />
    </>
  );
};

export default SearchPage;
