interface FormData {
    [key: string]: string;
}
interface Result {
    [key: string]: number | string;
}
export default function mungeFormData(formData: FormData): Result;
export {};
