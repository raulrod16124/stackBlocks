let color_index = 0;
const generateColor = () => {
	const colors = [
		0x1abc9c,
		0x16a085,
		0x2ecc71,
		0x27ae60,
		0x3498db,
		0x2980b9,
		0x9b59b6,
		0x8e44ad,
		0x34495e,
		0x2c3e50,
		0xf1c40f,
		0xf39c12,
		0xe67e22,
		0xd35400,
		0xe74c3c,
		0xc0392b,
		0xecf0f1,
		0xbdc3c7,
		0x95a5a6,
		0x7f8c8d,
	];
	color_index++;
	return colors[color_index%colors.length];
}

export default generateColor;
