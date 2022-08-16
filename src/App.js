import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CardForm from "./components/CardForm";

import "./App.css";

const stripePromise = loadStripe(process.env.REACT_APP_STRIP_SECRET);

const App = () => {
	return (
		<Elements stripe={stripePromise}>
			<div className="DemoWrapper">
				<div className="Demo">
					<CardForm />
				</div>
			</div>
		</Elements>
	);
};
export default App;
