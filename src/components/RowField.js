function RowField( { fieldName, fieldValue }) {
    return (
    <>
        <div className="row-field">{fieldName}: {fieldValue}</div>
    </>
    )
}

export default RowField;