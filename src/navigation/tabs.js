import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Counter from "../../Components/Counter";
import Login from "../../Auth/login";
import Products from "../../Screens/ProductScreen/ProductsScreen";
import ProductList from "../../Screens/AmbalaProducts/ambalaProducts";
import AddNew from "../../Auth/AddNew";
import Inventory from "../../Screens/Inventory/add";


const Tab = createBottomTabNavigator();
const Tabs = () => {

    return(
        <Tab.Navigator
        screenOptions={{  
            headerShown: false,
            tabBarStyle: { backgroundColor: 'darkgreen' },
            tabBarActiveTintColor: 'yellow',
            tabBarInactiveTintColor: 'white',
            tabBarLabelStyle: { Color: 'white', fontSize: 10, fontWeight: 'bold', padding:5,},

        }}
    >
            <Tab.Screen name="Login" component={Login}></Tab.Screen>
            <Tab.Screen name="Add" component={AddNew}></Tab.Screen>
            <Tab.Screen name="💰" component={Products}></Tab.Screen>
            <Tab.Screen name="🛒" component={ProductList}></Tab.Screen>
            <Tab.Screen name="Counter" component={Counter}></Tab.Screen>
            <Tab.Screen name="Inventory" component={Inventory}></Tab.Screen>
            
        </Tab.Navigator>
        );
}

export default Tabs;