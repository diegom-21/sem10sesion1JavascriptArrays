## Resumen de Métodos de Arrays en JavaScript
Los arrays en JavaScript son estructuras de datos utilizadas para almacenar listas de elementos, permitiendo manipular y acceder a estos de diversas maneras a través de múltiples métodos incorporados en el lenguaje.

1. **for loop**:
   - Se utiliza para repetir un bloque de código un número determinado de veces.
   - Estructura: `for (inicialización; condición; expresión de iteración)`.
   - Es útil cuando se necesita controlar explícitamente el número de iteraciones.

2. **forEach**:
   - Itera sobre cada elemento de un array y ejecuta una función proporcionada.
   - No devuelve un nuevo array.
   - Es conveniente para operaciones simples en cada elemento del array.

3. **map**:
   - Crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento del array original.
   - Devuelve un nuevo array con la misma longitud que el array original.
   - Útil para transformar cada elemento de un array en otro valor.

4. **filter**:
   - Crea un nuevo array con todos los elementos que cumplan una condición determinada.
   - Devuelve un nuevo array con los elementos filtrados.
   - Ideal para seleccionar elementos específicos de un array.

5. **reduce**:
   - Aplica una función a un acumulador y a cada valor de un array para reducirlo a un único valor.
   - Devuelve un único valor resultante.
   - Útil para realizar cálculos complejos sobre los elementos de un array.

6. **find**:
   - Devuelve el primer elemento de un array que cumple una condición dada.
   - Útil para encontrar un único elemento en un array.

7. **some**:
   - Comprueba si al menos un elemento de un array cumple una condición.
   - Devuelve true si al menos un elemento cumple la condición, de lo contrario, devuelve false.

8. **every**:
   - Comprueba si todos los elementos de un array cumplen una condición.
   - Devuelve true si todos los elementos cumplen la condición, de lo contrario, devuelve false.

9. **sort**:
   - Ordena los elementos de un array localmente y devuelve el array ordenado.
   - Modifica el array original.
   - Ideal para ordenar los elementos de un array en función de ciertos criterios.
