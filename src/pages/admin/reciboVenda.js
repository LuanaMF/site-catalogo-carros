import { useRef } from 'react';
import jsPDF from 'jspdf';
import TemplateRecibo from '../../templates/templateRecibo';
import { Button, Text, Spacer } from '@nextui-org/react';



function GeraRecibo({ venda }) {
	const reportTemplateRef = useRef(null);

	const handleGeneratePdf = () => {
		const doc = new jsPDF({
			format: 'a4',
			unit: 'px',
		});

		// Adding the fonts.
		doc.setFont('Inter-Regular', 'normal');

		doc.html(reportTemplateRef.current, {
			async callback(doc) {
				await doc.save('document');
			},
		});
	};

	return (
		<>
		<div style={{display: 'grid', marginTop: '10px'}}>
		   <Text b color='warning' css={{textAlign: 'center'}}>{'Pré visualização do recibo'}</Text>
		   <Spacer x={1}></Spacer>
		   <Button onClick={handleGeneratePdf}>
                Fazer download
            </Button>
		</div>
		<div style={{marginLeft: '450px'}}>
			
            <div ref={reportTemplateRef}>
                <TemplateRecibo />
            </div>

		</div>
		</>
	);
}

export default GeraRecibo;