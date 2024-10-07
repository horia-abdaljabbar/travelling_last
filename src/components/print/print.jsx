import html2pdf from 'html2pdf.js';
const componentRef = useRef();
const [pdfPreviewUrl, setPdfPreviewUrl] = useState(null);

const handlePrint = () => {
    const element = componentRef.current;
    const opt = {
        margin: [5, 5, 5, 5], // [top, left, bottom, right]
        filename: 'my-document.pdf',
        image: { type: 'jpeg', quality: 0.99 },
        html2canvas: { scale: 2 }, // تحسين جودة الصورة
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }, // حجم الصفحة واتجاهها
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }, // تجنب قطع النصوص في الصفحة
    };

    html2pdf()
        .from(element)
        .set(opt)
        .output('blob')
        .then((pdfBlob) => {
            const pdfUrl = URL.createObjectURL(pdfBlob); // تحويل الـ Blob إلى URL
            window.open(pdfUrl);
            // هنا يمكن إضافة ترويسة مخصصة لكل صفحة
            // const totalPages = pdf.internal.getNumberOfPages();
            //  for (let i = 1; i <= totalPages; i++) {
            //  pdf.setPage(i);
            //    pdf.setFontSize(10);
            //   pdf.text('Header Title', 10, 10); // تحديد ترويسة الصفحة
            //   pdf.text(`Page ${i} of ${totalPages}`, pdf.internal.pageSize.width - 40, pdf.internal.pageSize.height - 10); // إضافة رقم الصفحة في التذييل
            // }
        });
};