interface FormData {
  [key: string]: string;
}

interface Result {
  [key: string]: number | string;
}

export default function mungeFormData(formData: FormData) {
  const result: Result = {};

  Object.entries(formData).map(([key, value]) => {
    const numericKeys = [
      "brownScholarship",
      "federalGrants",
      "programTuitionFeeSupport",
      "loans"
    ];

    if (numericKeys.includes(key) && Number.isNaN(parseInt(value, 10))) {
      result[key] = 0;
    } else {
      result[key] = value;
    }

    return undefined;
  });

  return result;
}
