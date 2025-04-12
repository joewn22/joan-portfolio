import ChildContainer from "~/components/layout/child-container";

const ContactMe = () => {
	return (
		<ChildContainer>
			<p className="text-2xl">
				Got a bold idea, a product challenge, or just want to chat tech?
			</p>
			<span>
				Email:{" "}
				<a
					href="mailto:kagiso.joan@gmail.com"
					target="_blank"
					className="text-lg underline cursor-pointer"
				>
					{" "}
					kagiso.joan@gmail.com
				</a>
			</span>
		</ChildContainer>
	);
};

export default ContactMe;
