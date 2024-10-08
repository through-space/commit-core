import { useMainContext } from "@context/MainContext";

export const HomeButton = () => {
	const { setCurrentBranchID, repo } = useMainContext();

	const mainBranchID = repo.mainBranchID;

	return (
		<button onClick={() => setCurrentBranchID(mainBranchID)}>Home</button>
	);
};
