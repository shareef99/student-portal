import { ChangeEvent } from "react";
import readXlsxFile from "read-excel-file";

interface Props {}

const upload = (props: Props) => {
    const readUploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        if (e.target.files) {
            const file = await readXlsxFile(e.target.files[0]);
            const data = file.map((row) => row);
            console.log(data);
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
