import RowField from "../RowField";

function TableRowRoles({ content, index }) {
    return (
        <>
            {
                <div className={index % 2 == 0 ? "table-row light" : "table-row dark"}>
                    <div>Role</div>
                    <div>{content.role_id}</div>
                    <div>{content.name}</div>
                </div>
            }
        </>
    )
}

export default TableRowRoles;