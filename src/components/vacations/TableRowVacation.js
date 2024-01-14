import RowField from "../RowField";

function TableRowVacation({ content, index }) {
    return (
        <>
            {
                <div className={index % 2 == 0 ? "table-row light" : "table-row dark"}>
                    <div>Vacation</div>
                    <div>{content.start}</div>
                    <div>{content.end}</div>
                    <div>{content.comment}</div>
                </div>
            }
        </>
    )
}

export default TableRowVacation;