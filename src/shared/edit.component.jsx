import { ApiService } from "../services/api.service.js";

export const EditComponent = ({ obj, keyObj, type, refresh, isAdmin, setState }) => {

	const [edit, setEdit] = React.useState(false);
	const [valueText, setValueText] = React.useState(obj[keyObj]);

	const onDbClick = React.useCallback(() => {
		setEdit(true);
	}, []);

	const onBlur = React.useCallback(() => {
		if (type) {
			ApiService.saveType(type, obj).then(() => {
				if (!('id' in obj)) {
					refresh();
				}
				setState && setState(a => !a);
			});
		}
		setEdit(false);
	}, [valueText]);

	const onChangeValue = React.useCallback((e) => {
		setValueText(obj[keyObj] = e.target.value);
	}, []);

	if (edit) {
		return <input value={valueText} onChange={onChangeValue} onBlur={onBlur} autoFocus={true} />
	}

	return <span onDoubleClick={isAdmin && onDbClick}>
		{valueText}
	</span>
};
