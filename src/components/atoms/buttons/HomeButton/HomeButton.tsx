import { useMainContext } from "@context/MainContext/MainContext";
import { useRepo } from "@context/RepoContext/RepoContext";

export const HomeButton = () => {
	const { setCurrentBranchID } = useMainContext();
	const repo = useRepo();

	const mainBranchID = repo.mainBranchID;

	return (
		<button onClick={() => setCurrentBranchID(mainBranchID)}>Home</button>
	);
};
