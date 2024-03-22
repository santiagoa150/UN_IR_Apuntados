/**
 * @enum {string} Constantes relacionadas con la base de datos del proyecto.
 * @readonly
 */
export enum DatabaseConstants {
	/**
	 * Esta constante representa el nombre de la conexión a la
	 * base de datos.
	 */
	DATABASE_CONNECTION_NAME = 'DATABASE_CONNECTION_NAME',
	/**
	 * Esta constante representa el nombre de la colección de diseños de
	 * cartas en la base de datos.
	 */
	CARD_DESIGN_COLLECTION_NAME = 'Card-design',
	/**
	 * Esta constante representa el provider del esquema de los diseños de cartas.
	 */
	CARD_DESIGN_PROVIDER = 'CARD_DESIGN_PROVIDER',
	/**
	 * Esta constante representa el nombre de la colección de usuarios
	 * en la base de datos.
	 */
	USER_COLLECTION_NAME = 'User',
	/**
	 * Esta constante representa el provider del esquema de los usuarios.
	 */
	USER_PROVIDER = 'USER_PROVIDER',
}