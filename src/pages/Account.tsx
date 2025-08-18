import Heading from "@/component/shared/Heading/Heading";
import { useAppSelector } from "@/redux/hooks";


const Account = () => {
    const user = useAppSelector((state) => state.auth.user);
     return (
        <>
            <Heading title="Account Info" />
            <ul>
                <li>Name: {user?.firstName} {user?.lastName}</li>
                <li>Email: {user?.email}</li>
                
            </ul>
        </>
    );
};

export default Account;