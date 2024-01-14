import RowField from "../RowField";

function TableRowVacationType({ content, index }) {
    return (
        <>
            {
                <div className={index % 2 == 0 ? "table-row light" : "table-row dark"}>
                    <div>Vacation Type</div>
                    <div>{content.name}</div>
                    <div>{content.description}</div>
                    <div>{content.max_length}</div>
                </div>
            }
        </>
    )
}

export default TableRowVacationType;