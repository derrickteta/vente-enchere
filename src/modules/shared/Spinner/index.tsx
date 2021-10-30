import { PulseLoader } from 'react-spinners';

export const Spinner = ({ isLoading }: { isLoading: boolean }) => {
  if (isLoading) {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          margin: 50,
        }}
      >
        <PulseLoader size={15} margin={2} loading={isLoading} />
      </div>
    );
  }
  return <div></div>;
};
