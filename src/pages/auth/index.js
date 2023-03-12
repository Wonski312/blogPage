import AuthForm from "@/components/AuthForm/AuthForm";
import { useRouter } from "next/router";


function AuthPage(props) {
const router = useRouter()
// getting mode (searchQuery parameter)
console.log(router.query);
	return (
		<AuthForm query={router.query}/>
	);
}
export default AuthPage;