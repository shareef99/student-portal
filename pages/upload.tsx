import { ChangeEvent } from "react";
import xlsx from "xlsx";

interface Props {}

const upload = (props: Props) => {
    const readUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        if (e.target.files) {
            const reader = new FileReader();

            reader.onload = (e: any) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                console.log(json);
            };

            reader.readAsArrayBuffer(e.target.files[0]);
        }
    };

    return (
        <div>
            <form action="">
                <label htmlFor="upload">Upload File</label>
                <input
                    type="file"
                    name="upload"
                    id="upload"
                    onChange={readUploadFile}
                />
            </form>
        </div>
    );
};

export default upload;
