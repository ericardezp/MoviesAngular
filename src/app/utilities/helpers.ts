export function toBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export function parserErrors(response: any): string[] {
  const result: string[] = [];

  if (response.error) {
    if (typeof response.error === 'string') {
      result.push(response.error);
    } else {
      const errorsMap = response.error.errors;
      const entries = Object.entries(errorsMap);
      entries.forEach((error: any[]) => {
        const fieldName = error[0];
        error[1].forEach(errorMessage => {
          result.push(`${fieldName}: ${errorMessage}`);
        });
      });
    }
  }
  return result;
}

export function dateFormatter(date: Date): string {
  const dateFormat = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  const [
    {value: month}, ,
    {value: day}, ,
    {value: year}
  ] = dateFormat.formatToParts(date);

  return `${year}-${month}-${day}`;
}
