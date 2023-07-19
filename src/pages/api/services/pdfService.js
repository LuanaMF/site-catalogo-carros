import htmlToPdf from 'html-pdf'

const geraPDF = async (req, res) => {
  const { content } = req.body;

  try {
    // Gera o PDF com o conteúdo fornecido
    htmlToPdf.create(content).toStream((err, pdfStream) => {
      if (err) {
        console.error('Erro ao gerar o PDF:', err);
        res.status(500).send('Erro ao gerar o PDF.');
      } else {
        // Envia o PDF gerado como resposta da API
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=arquivo.pdf');
        pdfStream.pipe(res);
      }
    });
  } catch (error) {
    console.error('Erro ao gerar o PDF:', error);
    res.status(500).send('Erro ao gerar o PDF.');
  }
};

export default geraPDF;