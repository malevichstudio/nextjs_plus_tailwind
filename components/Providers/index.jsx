import ProviderBtn from '@/components//ProviderBtn';

export default function Providers({ providers, label }) {
  return (
    <div className='grid gap-2 sm:grid-cols-2 lg:grid-cols-3'>
      {providers.map(({ id, name }) => {
        if (name == 'Credentials') return;
        return <ProviderBtn key={id} id={id} label={`${label} with ${name}`} />;
      })}
    </div>
  );
}
