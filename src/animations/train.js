import { useTrail, animated } from 'react-spring';

export default function Trail() {
  
  const [trail, set, stop] = useTrail(number, () => ({opacity: 1}))

  // Update trail
  set({opacity: 0})
  // Stop trail
  stop()

}
