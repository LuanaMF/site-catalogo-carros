import { useRef } from 'react';
import jsPDF from 'jspdf';
import TemplateRecibo from './templateRecibo';
import { Tooltip } from '@nextui-org/react';
import { ActionButton } from '@/components/ActionButton';
import { CgFileDocument } from "react-icons/cg";


function GeraRecibo({button}) {
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
		<div>
			<Tooltip
                content="Gerar recibo"
                color="gray"
                onClick={handleGeneratePdf}
            >
                <ActionButton>
                  <CgFileDocument size={20} color="gray"/>
                </ActionButton>
            </Tooltip>
            <div style={{display: 'none'}}>
                <div ref={reportTemplateRef}>
                    <TemplateRecibo />
                </div>
            </div>
		</div>
	);
}

export default GeraRecibo;