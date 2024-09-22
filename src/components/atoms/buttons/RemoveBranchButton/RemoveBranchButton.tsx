import { useMainContext } from "@context/MainContext/MainContext";
import { IRemoveBranchButtonProps } from "@components/atoms/buttons/RemoveBranchButton/RemoveBranchButtonInterfaces";

export const RemoveBranchButton = (props: IRemoveBranchButtonProps) => {
	const { branch } = props;
	//TODO: add confirmation dialog
	const { repo, updateRepo } = useMainContext();

	const handleRemove = () => {
		repo.removeBranch(branch);
		updateRepo(repo);
	};

	return <button onClick={handleRemove}>Remove</button>;
};
