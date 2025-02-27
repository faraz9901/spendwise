import ExcelJS from "exceljs";

interface Columns {
    header: string;
    key: string;
    width: number;
}

const downLoadExcelFromData = async (data: any, columns: Columns[], outputFileName: string) => {

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Sheet1");

    sheet.columns = columns

    // Add Rows
    data.forEach((item: any) => sheet.addRow(item));

    // Generate Excel file
    const buffer = await workbook.xlsx.writeBuffer();

    const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${outputFileName}.xlsx`;
    link.click();
    URL.revokeObjectURL(link.href);
    link.remove();
};

export default downLoadExcelFromData;