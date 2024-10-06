import { useState } from "react";
import * as XLSX from "xlsx";

const ExcelReader = () => {
    const [data, setData] = useState([]);

    // دالة لتحميل الملف
    // لاستبدال البيانات الجديدة بالبيانات القديمة
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            const binaryStr = event.target.result;
            const workbook = XLSX.read(binaryStr, { type: "binary" });

            // قراءة أول شيت
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];

            // تحويل الشيت إلى JSON
            const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

            // معالجة البيانات لاستخراج SKU و Qty و الوصف من العمود الأول
            const formattedData = jsonData.flatMap((row) => {
                const descriptions = row[1]; // الجملة الطويلة في العمود الأول

                // إزالة علامات الاقتباس الزائدة إن وجدت
                const cleanedDescriptions = descriptions.replace(/(^'|'$)/g, "");

                // تقسيم الأوصاف إذا كانت متعددة باستخدام الفاصلة
                const items = cleanedDescriptions.split("','");

                return items.flatMap((item) => {
                    const skuMatch = item.match(/\(SKU: (\d+)\)/); // استخراج SKU
                    const qtyMatch = item.match(/\(Qty: (\d+)\)/); // استخراج Qty

                    if (skuMatch && qtyMatch) {
                        const sku = skuMatch[1];
                        const qty = qtyMatch[1];

                        // إزالة (SKU: xx) و (Qty: xx) وترك الباقي
                        const desc = item
                            .replace(/\(SKU: \d+\)/, "")
                            .replace(/\(Qty: \d+\)/, "")
                            .trim();

                        return {
                            SKU: sku,
                            Qty: qty,
                            desc: desc, // النص النهائي بدون الأقواس والقيم الزائدة
                        };
                    }
                    return null;
                }).filter(Boolean); // إزالة القيم الفارغة
            });

            setData(formattedData);
        };

        reader.readAsBinaryString(file);
    };
    // لاضافة بيانات القديم ع الجديد
    // const handleFileUpload = (e) => {
    //     const file = e.target.files[0];
    //     const reader = new FileReader();

    //     reader.onload = (event) => {
    //         const binaryStr = event.target.result;
    //         const workbook = XLSX.read(binaryStr, { type: "binary" });

    //         // قراءة أول شيت
    //         const sheetName = workbook.SheetNames[0];
    //         const sheet = workbook.Sheets[sheetName];

    //         // تحويل الشيت إلى JSON
    //         const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    //         // معالجة البيانات لاستخراج SKU و Qty و الوصف من العمود الأول
    //         const formattedData = jsonData.flatMap((row) => {
    //             const descriptions = row[1];

    //             // (بقية الكود تبقى كما هي)

    //             return items.flatMap((item) => {
    //                 // (بقية الكود تبقى كما هي)
    //             });
    //         });

    //         // دمج البيانات الجديدة مع القديمة
    //         setData((prevData) => [...prevData, ...formattedData]);
    //     };

    //     reader.readAsBinaryString(file);
    // };


    return (
        <div>
            <input
                type="file"
                accept=".xlsx, .xls"
                onChange={handleFileUpload}
            />
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default ExcelReader;
