import {uploadImage} from "../config/FirebaseMethods";


export default function Progress12 (file) {
    uploadImage(file)
    return (
        <h1>Progressbar</h1>        
    )
}