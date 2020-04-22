import { useLayoutEffect } from 'react';
import useAppContext from './UseContext';

export default ({ url }) => {
  const { useRouter, UseBack } = useAppContext();
  const { setBackState } = UseBack;
  const router = useRouter();
  const { match: { url: baseUrl } } = router;

  useLayoutEffect(() => {
    console.log('backstate component setting', (url || baseUrl));
    setBackState(url || baseUrl);
  });

  return null;
};