import RowField from "../RowField";

function TableRowUser({ content, index }) {
    return (
        <>
            {
                <div className={index % 2 == 0 ? "table-row light" : "table-row dark"}>
                    <div>User</div>
                    <div>{content.name}</div>
                    <div>{content.surname}</div>
                </div>
            }
        </>
    )
}

export default TableRowUser;