import { useEffect, useRef, useState } from 'react';
import jsPDF from 'jspdf';
import TemplateRecibo from '../../../templates/templateRecibo';
import { Button, Text, Spacer } from '@nextui-org/react';
import { useRouter } from 'next/router';
import * as router from '@/pages/api/router'

function GeraRecibo() {

	const { query } = useRouter();
    
	const [venda, setVenda ] = useState({});

	useEffect(() => {
		if (query.id != undefined) {
			const fetchData = async () => {
				try {
					const response = await router.apiPost({ id: query.id }, '../../api/venda');
					setVenda(response.result);
				} catch (error) {
				  console.log(error);
				}
			};
			
			fetchData();
		}

	}, [query.id]);

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
				await doc.save('recibo');
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
				{
				  venda[0] != undefined? 
				  <TemplateRecibo venda={venda[0]}/> 
				  : ''
				}
                
            </div>

		</div>
		</>
	);
}

export default GeraRecibo;