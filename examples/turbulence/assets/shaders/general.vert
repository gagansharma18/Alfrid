precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
<<<<<<< HEAD
uniform vec3 position;
uniform vec3 scale;
=======
>>>>>>> 6d975a773a6f2ad091b88f932153c0dd9582bcba

varying vec2 vTextureCoord;

void main(void) {
<<<<<<< HEAD
	vec3 pos = aVertexPosition * scale;
    gl_Position = uPMatrix * uMVMatrix * vec4(pos+position, 1.0);
=======
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
>>>>>>> 6d975a773a6f2ad091b88f932153c0dd9582bcba
    vTextureCoord = aTextureCoord;
}