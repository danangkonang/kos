import { 
   createAppContainer, 
   createMaterialTopTabNavigator 
 } from 'react-navigation';

import Kost from '../pages/home/sub/Kost'
import Apartement from '../pages/home/sub/Apartement';
import Job from '../pages/home/sub/Job';

const AppNavigator = createMaterialTopTabNavigator({
   kost: Kost,
   apartement: Apartement,
   job: Job
 })


const Navigasi = createAppContainer(AppNavigator);
export default Navigasi;