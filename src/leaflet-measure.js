/******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        /******/ configurable: false,
        /******/ enumerable: true,
        /******/ get: getter
        /******/
      });
      /******/
    }
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = '/dist/'; // Load entry module and return exports
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 28));
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /***/ function(module, exports, __webpack_require__) {
      var Symbol = __webpack_require__(4),
        getRawTag = __webpack_require__(38),
        objectToString = __webpack_require__(39);

      /** `Object#toString` result references. */
      var nullTag = '[object Null]',
        undefinedTag = '[object Undefined]';

      /** Built-in value references. */
      var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

      /**
       * The base implementation of `getTag` without fallbacks for buggy environments.
       *
       * @private
       * @param {*} value The value to query.
       * @returns {string} Returns the `toStringTag`.
       */
      function baseGetTag(value) {
        if (value == null) {
          return value === undefined ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value)
          ? getRawTag(value)
          : objectToString(value);
      }

      module.exports = baseGetTag;

      /***/
    },
    /* 1 */
    /***/ function(module, exports) {
      /**
       * Checks if `value` is object-like. A value is object-like if it's not `null`
       * and has a `typeof` result of "object".
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
       * @example
       *
       * _.isObjectLike({});
       * // => true
       *
       * _.isObjectLike([1, 2, 3]);
       * // => true
       *
       * _.isObjectLike(_.noop);
       * // => false
       *
       * _.isObjectLike(null);
       * // => false
       */
      function isObjectLike(value) {
        return value != null && typeof value == 'object';
      }

      module.exports = isObjectLike;

      /***/
    },
    /* 2 */
    /***/ function(module, exports) {
      /**
       * Checks if `value` is the
       * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
       * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an object, else `false`.
       * @example
       *
       * _.isObject({});
       * // => true
       *
       * _.isObject([1, 2, 3]);
       * // => true
       *
       * _.isObject(_.noop);
       * // => true
       *
       * _.isObject(null);
       * // => false
       */
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == 'object' || type == 'function');
      }

      module.exports = isObject;

      /***/
    },
    /* 3 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* unused harmony export earthRadius */
      /* unused harmony export factors */
      /* unused harmony export unitsFactors */
      /* unused harmony export areaFactors */
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'b', function() {
        return feature;
      });
      /* unused harmony export geometry */
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'f', function() {
        return point;
      });
      /* unused harmony export points */
      /* unused harmony export polygon */
      /* unused harmony export polygons */
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'e', function() {
        return lineString;
      });
      /* unused harmony export lineStrings */
      /* unused harmony export featureCollection */
      /* unused harmony export multiLineString */
      /* unused harmony export multiPoint */
      /* unused harmony export multiPolygon */
      /* unused harmony export geometryCollection */
      /* unused harmony export round */
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'g', function() {
        return radiansToLength;
      });
      /* unused harmony export lengthToRadians */
      /* unused harmony export lengthToDegrees */
      /* unused harmony export bearingToAzimuth */
      /* unused harmony export radiansToDegrees */
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'a', function() {
        return degreesToRadians;
      });
      /* unused harmony export convertLength */
      /* unused harmony export convertArea */
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'c', function() {
        return isNumber;
      });
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'd', function() {
        return isObject;
      });
      /* unused harmony export validateBBox */
      /* unused harmony export validateId */
      /* unused harmony export radians2degrees */
      /* unused harmony export degrees2radians */
      /* unused harmony export distanceToDegrees */
      /* unused harmony export distanceToRadians */
      /* unused harmony export radiansToDistance */
      /* unused harmony export bearingToAngle */
      /* unused harmony export convertDistance */
      /**
       * Earth Radius used with the Harvesine formula and approximates using a spherical (non-ellipsoid) Earth.
       */
      var earthRadius = 6371008.8;

      /**
       * Unit of measurement factors using a spherical (non-ellipsoid) earth radius.
       */
      var factors = {
        meters: earthRadius,
        metres: earthRadius,
        millimeters: earthRadius * 1000,
        millimetres: earthRadius * 1000,
        centimeters: earthRadius * 100,
        centimetres: earthRadius * 100,
        kilometers: earthRadius / 1000,
        kilometres: earthRadius / 1000,
        miles: earthRadius / 1609.344,
        nauticalmiles: earthRadius / 1852,
        inches: earthRadius * 39.37,
        yards: earthRadius / 1.0936,
        feet: earthRadius * 3.28084,
        radians: 1,
        degrees: earthRadius / 111325
      };

      /**
       * Units of measurement factors based on 1 meter.
       */
      var unitsFactors = {
        meters: 1,
        metres: 1,
        millimeters: 1000,
        millimetres: 1000,
        centimeters: 100,
        centimetres: 100,
        kilometers: 1 / 1000,
        kilometres: 1 / 1000,
        miles: 1 / 1609.344,
        nauticalmiles: 1 / 1852,
        inches: 39.37,
        yards: 1 / 1.0936,
        feet: 3.28084,
        radians: 1 / earthRadius,
        degrees: 1 / 111325
      };

      /**
       * Area of measurement factors based on 1 square meter.
       */
      var areaFactors = {
        meters: 1,
        metres: 1,
        millimeters: 1000000,
        millimetres: 1000000,
        centimeters: 10000,
        centimetres: 10000,
        kilometers: 0.000001,
        kilometres: 0.000001,
        acres: 0.000247105,
        miles: 3.86e-7,
        yards: 1.195990046,
        feet: 10.763910417,
        inches: 1550.003100006
      };

      /**
       * Wraps a GeoJSON {@link Geometry} in a GeoJSON {@link Feature}.
       *
       * @name feature
       * @param {Geometry} geometry input geometry
       * @param {Object} [properties={}] an Object of key-value pairs to add as properties
       * @param {Object} [options={}] Optional Parameters
       * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
       * @param {string|number} [options.id] Identifier associated with the Feature
       * @returns {Feature} a GeoJSON Feature
       * @example
       * var geometry = {
       *   "type": "Point",
       *   "coordinates": [110, 50]
       * };
       *
       * var feature = turf.feature(geometry);
       *
       * //=feature
       */
      function feature(geometry, properties, options) {
        // Optional Parameters
        options = options || {};
        if (!isObject(options)) throw new Error('options is invalid');
        var bbox = options.bbox;
        var id = options.id;

        // Validation
        if (geometry === undefined) throw new Error('geometry is required');
        if (properties && properties.constructor !== Object)
          throw new Error('properties must be an Object');
        if (bbox) validateBBox(bbox);
        if (id) validateId(id);

        // Main
        var feat = { type: 'Feature' };
        if (id) feat.id = id;
        if (bbox) feat.bbox = bbox;
        feat.properties = properties || {};
        feat.geometry = geometry;
        return feat;
      }

      /**
       * Creates a GeoJSON {@link Geometry} from a Geometry string type & coordinates.
       * For GeometryCollection type use `helpers.geometryCollection`
       *
       * @name geometry
       * @param {string} type Geometry Type
       * @param {Array<number>} coordinates Coordinates
       * @param {Object} [options={}] Optional Parameters
       * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Geometry
       * @returns {Geometry} a GeoJSON Geometry
       * @example
       * var type = 'Point';
       * var coordinates = [110, 50];
       *
       * var geometry = turf.geometry(type, coordinates);
       *
       * //=geometry
       */
      function geometry(type, coordinates, options) {
        // Optional Parameters
        options = options || {};
        if (!isObject(options)) throw new Error('options is invalid');
        var bbox = options.bbox;

        // Validation
        if (!type) throw new Error('type is required');
        if (!coordinates) throw new Error('coordinates is required');
        if (!Array.isArray(coordinates)) throw new Error('coordinates must be an Array');
        if (bbox) validateBBox(bbox);

        // Main
        var geom;
        switch (type) {
          case 'Point':
            geom = point(coordinates).geometry;
            break;
          case 'LineString':
            geom = lineString(coordinates).geometry;
            break;
          case 'Polygon':
            geom = polygon(coordinates).geometry;
            break;
          case 'MultiPoint':
            geom = multiPoint(coordinates).geometry;
            break;
          case 'MultiLineString':
            geom = multiLineString(coordinates).geometry;
            break;
          case 'MultiPolygon':
            geom = multiPolygon(coordinates).geometry;
            break;
          default:
            throw new Error(type + ' is invalid');
        }
        if (bbox) geom.bbox = bbox;
        return geom;
      }

      /**
       * Creates a {@link Point} {@link Feature} from a Position.
       *
       * @name point
       * @param {Array<number>} coordinates longitude, latitude position (each in decimal degrees)
       * @param {Object} [properties={}] an Object of key-value pairs to add as properties
       * @param {Object} [options={}] Optional Parameters
       * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
       * @param {string|number} [options.id] Identifier associated with the Feature
       * @returns {Feature<Point>} a Point feature
       * @example
       * var point = turf.point([-75.343, 39.984]);
       *
       * //=point
       */
      function point(coordinates, properties, options) {
        if (!coordinates) throw new Error('coordinates is required');
        if (!Array.isArray(coordinates)) throw new Error('coordinates must be an Array');
        if (coordinates.length < 2) throw new Error('coordinates must be at least 2 numbers long');
        if (!isNumber(coordinates[0]) || !isNumber(coordinates[1]))
          throw new Error('coordinates must contain numbers');

        return feature(
          {
            type: 'Point',
            coordinates: coordinates
          },
          properties,
          options
        );
      }

      /**
       * Creates a {@link Point} {@link FeatureCollection} from an Array of Point coordinates.
       *
       * @name points
       * @param {Array<Array<number>>} coordinates an array of Points
       * @param {Object} [properties={}] Translate these properties to each Feature
       * @param {Object} [options={}] Optional Parameters
       * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the FeatureCollection
       * @param {string|number} [options.id] Identifier associated with the FeatureCollection
       * @returns {FeatureCollection<Point>} Point Feature
       * @example
       * var points = turf.points([
       *   [-75, 39],
       *   [-80, 45],
       *   [-78, 50]
       * ]);
       *
       * //=points
       */
      function points(coordinates, properties, options) {
        if (!coordinates) throw new Error('coordinates is required');
        if (!Array.isArray(coordinates)) throw new Error('coordinates must be an Array');

        return featureCollection(
          coordinates.map(function(coords) {
            return point(coords, properties);
          }),
          options
        );
      }

      /**
       * Creates a {@link Polygon} {@link Feature} from an Array of LinearRings.
       *
       * @name polygon
       * @param {Array<Array<Array<number>>>} coordinates an array of LinearRings
       * @param {Object} [properties={}] an Object of key-value pairs to add as properties
       * @param {Object} [options={}] Optional Parameters
       * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
       * @param {string|number} [options.id] Identifier associated with the Feature
       * @returns {Feature<Polygon>} Polygon Feature
       * @example
       * var polygon = turf.polygon([[[-5, 52], [-4, 56], [-2, 51], [-7, 54], [-5, 52]]], { name: 'poly1' });
       *
       * //=polygon
       */
      function polygon(coordinates, properties, options) {
        if (!coordinates) throw new Error('coordinates is required');

        for (var i = 0; i < coordinates.length; i++) {
          var ring = coordinates[i];
          if (ring.length < 4) {
            throw new Error('Each LinearRing of a Polygon must have 4 or more Positions.');
          }
          for (var j = 0; j < ring[ring.length - 1].length; j++) {
            // Check if first point of Polygon contains two numbers
            if ((i === 0 && j === 0 && !isNumber(ring[0][0])) || !isNumber(ring[0][1]))
              throw new Error('coordinates must contain numbers');
            if (ring[ring.length - 1][j] !== ring[0][j]) {
              throw new Error('First and last Position are not equivalent.');
            }
          }
        }

        return feature(
          {
            type: 'Polygon',
            coordinates: coordinates
          },
          properties,
          options
        );
      }

      /**
       * Creates a {@link Polygon} {@link FeatureCollection} from an Array of Polygon coordinates.
       *
       * @name polygons
       * @param {Array<Array<Array<Array<number>>>>} coordinates an array of Polygon coordinates
       * @param {Object} [properties={}] an Object of key-value pairs to add as properties
       * @param {Object} [options={}] Optional Parameters
       * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
       * @param {string|number} [options.id] Identifier associated with the FeatureCollection
       * @returns {FeatureCollection<Polygon>} Polygon FeatureCollection
       * @example
       * var polygons = turf.polygons([
       *   [[[-5, 52], [-4, 56], [-2, 51], [-7, 54], [-5, 52]]],
       *   [[[-15, 42], [-14, 46], [-12, 41], [-17, 44], [-15, 42]]],
       * ]);
       *
       * //=polygons
       */
      function polygons(coordinates, properties, options) {
        if (!coordinates) throw new Error('coordinates is required');
        if (!Array.isArray(coordinates)) throw new Error('coordinates must be an Array');

        return featureCollection(
          coordinates.map(function(coords) {
            return polygon(coords, properties);
          }),
          options
        );
      }

      /**
       * Creates a {@link LineString} {@link Feature} from an Array of Positions.
       *
       * @name lineString
       * @param {Array<Array<number>>} coordinates an array of Positions
       * @param {Object} [properties={}] an Object of key-value pairs to add as properties
       * @param {Object} [options={}] Optional Parameters
       * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
       * @param {string|number} [options.id] Identifier associated with the Feature
       * @returns {Feature<LineString>} LineString Feature
       * @example
       * var linestring1 = turf.lineString([[-24, 63], [-23, 60], [-25, 65], [-20, 69]], {name: 'line 1'});
       * var linestring2 = turf.lineString([[-14, 43], [-13, 40], [-15, 45], [-10, 49]], {name: 'line 2'});
       *
       * //=linestring1
       * //=linestring2
       */
      function lineString(coordinates, properties, options) {
        if (!coordinates) throw new Error('coordinates is required');
        if (coordinates.length < 2)
          throw new Error('coordinates must be an array of two or more positions');
        // Check if first point of LineString contains two numbers
        if (!isNumber(coordinates[0][1]) || !isNumber(coordinates[0][1]))
          throw new Error('coordinates must contain numbers');

        return feature(
          {
            type: 'LineString',
            coordinates: coordinates
          },
          properties,
          options
        );
      }

      /**
       * Creates a {@link LineString} {@link FeatureCollection} from an Array of LineString coordinates.
       *
       * @name lineStrings
       * @param {Array<Array<number>>} coordinates an array of LinearRings
       * @param {Object} [properties={}] an Object of key-value pairs to add as properties
       * @param {Object} [options={}] Optional Parameters
       * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the FeatureCollection
       * @param {string|number} [options.id] Identifier associated with the FeatureCollection
       * @returns {FeatureCollection<LineString>} LineString FeatureCollection
       * @example
       * var linestrings = turf.lineStrings([
       *   [[-24, 63], [-23, 60], [-25, 65], [-20, 69]],
       *   [[-14, 43], [-13, 40], [-15, 45], [-10, 49]]
       * ]);
       *
       * //=linestrings
       */
      function lineStrings(coordinates, properties, options) {
        if (!coordinates) throw new Error('coordinates is required');
        if (!Array.isArray(coordinates)) throw new Error('coordinates must be an Array');

        return featureCollection(
          coordinates.map(function(coords) {
            return lineString(coords, properties);
          }),
          options
        );
      }

      /**
       * Takes one or more {@link Feature|Features} and creates a {@link FeatureCollection}.
       *
       * @name featureCollection
       * @param {Feature[]} features input features
       * @param {Object} [options={}] Optional Parameters
       * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
       * @param {string|number} [options.id] Identifier associated with the Feature
       * @returns {FeatureCollection} FeatureCollection of Features
       * @example
       * var locationA = turf.point([-75.343, 39.984], {name: 'Location A'});
       * var locationB = turf.point([-75.833, 39.284], {name: 'Location B'});
       * var locationC = turf.point([-75.534, 39.123], {name: 'Location C'});
       *
       * var collection = turf.featureCollection([
       *   locationA,
       *   locationB,
       *   locationC
       * ]);
       *
       * //=collection
       */
      function featureCollection(features, options) {
        // Optional Parameters
        options = options || {};
        if (!isObject(options)) throw new Error('options is invalid');
        var bbox = options.bbox;
        var id = options.id;

        // Validation
        if (!features) throw new Error('No features passed');
        if (!Array.isArray(features)) throw new Error('features must be an Array');
        if (bbox) validateBBox(bbox);
        if (id) validateId(id);

        // Main
        var fc = { type: 'FeatureCollection' };
        if (id) fc.id = id;
        if (bbox) fc.bbox = bbox;
        fc.features = features;
        return fc;
      }

      /**
       * Creates a {@link Feature<MultiLineString>} based on a
       * coordinate array. Properties can be added optionally.
       *
       * @name multiLineString
       * @param {Array<Array<Array<number>>>} coordinates an array of LineStrings
       * @param {Object} [properties={}] an Object of key-value pairs to add as properties
       * @param {Object} [options={}] Optional Parameters
       * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
       * @param {string|number} [options.id] Identifier associated with the Feature
       * @returns {Feature<MultiLineString>} a MultiLineString feature
       * @throws {Error} if no coordinates are passed
       * @example
       * var multiLine = turf.multiLineString([[[0,0],[10,10]]]);
       *
       * //=multiLine
       */
      function multiLineString(coordinates, properties, options) {
        if (!coordinates) throw new Error('coordinates is required');

        return feature(
          {
            type: 'MultiLineString',
            coordinates: coordinates
          },
          properties,
          options
        );
      }

      /**
       * Creates a {@link Feature<MultiPoint>} based on a
       * coordinate array. Properties can be added optionally.
       *
       * @name multiPoint
       * @param {Array<Array<number>>} coordinates an array of Positions
       * @param {Object} [properties={}] an Object of key-value pairs to add as properties
       * @param {Object} [options={}] Optional Parameters
       * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
       * @param {string|number} [options.id] Identifier associated with the Feature
       * @returns {Feature<MultiPoint>} a MultiPoint feature
       * @throws {Error} if no coordinates are passed
       * @example
       * var multiPt = turf.multiPoint([[0,0],[10,10]]);
       *
       * //=multiPt
       */
      function multiPoint(coordinates, properties, options) {
        if (!coordinates) throw new Error('coordinates is required');

        return feature(
          {
            type: 'MultiPoint',
            coordinates: coordinates
          },
          properties,
          options
        );
      }

      /**
       * Creates a {@link Feature<MultiPolygon>} based on a
       * coordinate array. Properties can be added optionally.
       *
       * @name multiPolygon
       * @param {Array<Array<Array<Array<number>>>>} coordinates an array of Polygons
       * @param {Object} [properties={}] an Object of key-value pairs to add as properties
       * @param {Object} [options={}] Optional Parameters
       * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
       * @param {string|number} [options.id] Identifier associated with the Feature
       * @returns {Feature<MultiPolygon>} a multipolygon feature
       * @throws {Error} if no coordinates are passed
       * @example
       * var multiPoly = turf.multiPolygon([[[[0,0],[0,10],[10,10],[10,0],[0,0]]]]);
       *
       * //=multiPoly
       *
       */
      function multiPolygon(coordinates, properties, options) {
        if (!coordinates) throw new Error('coordinates is required');

        return feature(
          {
            type: 'MultiPolygon',
            coordinates: coordinates
          },
          properties,
          options
        );
      }

      /**
       * Creates a {@link Feature<GeometryCollection>} based on a
       * coordinate array. Properties can be added optionally.
       *
       * @name geometryCollection
       * @param {Array<Geometry>} geometries an array of GeoJSON Geometries
       * @param {Object} [properties={}] an Object of key-value pairs to add as properties
       * @param {Object} [options={}] Optional Parameters
       * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
       * @param {string|number} [options.id] Identifier associated with the Feature
       * @returns {Feature<GeometryCollection>} a GeoJSON GeometryCollection Feature
       * @example
       * var pt = {
       *     "type": "Point",
       *       "coordinates": [100, 0]
       *     };
       * var line = {
       *     "type": "LineString",
       *     "coordinates": [ [101, 0], [102, 1] ]
       *   };
       * var collection = turf.geometryCollection([pt, line]);
       *
       * //=collection
       */
      function geometryCollection(geometries, properties, options) {
        if (!geometries) throw new Error('geometries is required');
        if (!Array.isArray(geometries)) throw new Error('geometries must be an Array');

        return feature(
          {
            type: 'GeometryCollection',
            geometries: geometries
          },
          properties,
          options
        );
      }

      /**
       * Round number to precision
       *
       * @param {number} num Number
       * @param {number} [precision=0] Precision
       * @returns {number} rounded number
       * @example
       * turf.round(120.4321)
       * //=120
       *
       * turf.round(120.4321, 2)
       * //=120.43
       */
      function round(num, precision) {
        if (num === undefined || num === null || isNaN(num)) throw new Error('num is required');
        if (precision && !(precision >= 0)) throw new Error('precision must be a positive number');
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(num * multiplier) / multiplier;
      }

      /**
       * Convert a distance measurement (assuming a spherical Earth) from radians to a more friendly unit.
       * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
       *
       * @name radiansToLength
       * @param {number} radians in radians across the sphere
       * @param {string} [units='kilometers'] can be degrees, radians, miles, or kilometers inches, yards, metres, meters, kilometres, kilometers.
       * @returns {number} distance
       */
      function radiansToLength(radians, units) {
        if (radians === undefined || radians === null) throw new Error('radians is required');

        if (units && typeof units !== 'string') throw new Error('units must be a string');
        var factor = factors[units || 'kilometers'];
        if (!factor) throw new Error(units + ' units is invalid');
        return radians * factor;
      }

      /**
       * Convert a distance measurement (assuming a spherical Earth) from a real-world unit into radians
       * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
       *
       * @name lengthToRadians
       * @param {number} distance in real units
       * @param {string} [units='kilometers'] can be degrees, radians, miles, or kilometers inches, yards, metres, meters, kilometres, kilometers.
       * @returns {number} radians
       */
      function lengthToRadians(distance, units) {
        if (distance === undefined || distance === null) throw new Error('distance is required');

        if (units && typeof units !== 'string') throw new Error('units must be a string');
        var factor = factors[units || 'kilometers'];
        if (!factor) throw new Error(units + ' units is invalid');
        return distance / factor;
      }

      /**
       * Convert a distance measurement (assuming a spherical Earth) from a real-world unit into degrees
       * Valid units: miles, nauticalmiles, inches, yards, meters, metres, centimeters, kilometres, feet
       *
       * @name lengthToDegrees
       * @param {number} distance in real units
       * @param {string} [units='kilometers'] can be degrees, radians, miles, or kilometers inches, yards, metres, meters, kilometres, kilometers.
       * @returns {number} degrees
       */
      function lengthToDegrees(distance, units) {
        return radiansToDegrees(lengthToRadians(distance, units));
      }

      /**
       * Converts any bearing angle from the north line direction (positive clockwise)
       * and returns an angle between 0-360 degrees (positive clockwise), 0 being the north line
       *
       * @name bearingToAzimuth
       * @param {number} bearing angle, between -180 and +180 degrees
       * @returns {number} angle between 0 and 360 degrees
       */
      function bearingToAzimuth(bearing) {
        if (bearing === null || bearing === undefined) throw new Error('bearing is required');

        var angle = bearing % 360;
        if (angle < 0) angle += 360;
        return angle;
      }

      /**
       * Converts an angle in radians to degrees
       *
       * @name radiansToDegrees
       * @param {number} radians angle in radians
       * @returns {number} degrees between 0 and 360 degrees
       */
      function radiansToDegrees(radians) {
        if (radians === null || radians === undefined) throw new Error('radians is required');

        var degrees = radians % (2 * Math.PI);
        return (degrees * 180) / Math.PI;
      }

      /**
       * Converts an angle in degrees to radians
       *
       * @name degreesToRadians
       * @param {number} degrees angle between 0 and 360 degrees
       * @returns {number} angle in radians
       */
      function degreesToRadians(degrees) {
        if (degrees === null || degrees === undefined) throw new Error('degrees is required');

        var radians = degrees % 360;
        return (radians * Math.PI) / 180;
      }

      /**
       * Converts a length to the requested unit.
       * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
       *
       * @param {number} length to be converted
       * @param {string} originalUnit of the length
       * @param {string} [finalUnit='kilometers'] returned unit
       * @returns {number} the converted length
       */
      function convertLength(length, originalUnit, finalUnit) {
        if (length === null || length === undefined) throw new Error('length is required');
        if (!(length >= 0)) throw new Error('length must be a positive number');

        return radiansToLength(lengthToRadians(length, originalUnit), finalUnit || 'kilometers');
      }

      /**
       * Converts a area to the requested unit.
       * Valid units: kilometers, kilometres, meters, metres, centimetres, millimeters, acres, miles, yards, feet, inches
       * @param {number} area to be converted
       * @param {string} [originalUnit='meters'] of the distance
       * @param {string} [finalUnit='kilometers'] returned unit
       * @returns {number} the converted distance
       */
      function convertArea(area, originalUnit, finalUnit) {
        if (area === null || area === undefined) throw new Error('area is required');
        if (!(area >= 0)) throw new Error('area must be a positive number');

        var startFactor = areaFactors[originalUnit || 'meters'];
        if (!startFactor) throw new Error('invalid original units');

        var finalFactor = areaFactors[finalUnit || 'kilometers'];
        if (!finalFactor) throw new Error('invalid final units');

        return (area / startFactor) * finalFactor;
      }

      /**
       * isNumber
       *
       * @param {*} num Number to validate
       * @returns {boolean} true/false
       * @example
       * turf.isNumber(123)
       * //=true
       * turf.isNumber('foo')
       * //=false
       */
      function isNumber(num) {
        return !isNaN(num) && num !== null && !Array.isArray(num);
      }

      /**
       * isObject
       *
       * @param {*} input variable to validate
       * @returns {boolean} true/false
       * @example
       * turf.isObject({elevation: 10})
       * //=true
       * turf.isObject('foo')
       * //=false
       */
      function isObject(input) {
        return !!input && input.constructor === Object;
      }

      /**
       * Validate BBox
       *
       * @private
       * @param {Array<number>} bbox BBox to validate
       * @returns {void}
       * @throws Error if BBox is not valid
       * @example
       * validateBBox([-180, -40, 110, 50])
       * //=OK
       * validateBBox([-180, -40])
       * //=Error
       * validateBBox('Foo')
       * //=Error
       * validateBBox(5)
       * //=Error
       * validateBBox(null)
       * //=Error
       * validateBBox(undefined)
       * //=Error
       */
      function validateBBox(bbox) {
        if (!bbox) throw new Error('bbox is required');
        if (!Array.isArray(bbox)) throw new Error('bbox must be an Array');
        if (bbox.length !== 4 && bbox.length !== 6)
          throw new Error('bbox must be an Array of 4 or 6 numbers');
        bbox.forEach(function(num) {
          if (!isNumber(num)) throw new Error('bbox must only contain numbers');
        });
      }

      /**
       * Validate Id
       *
       * @private
       * @param {string|number} id Id to validate
       * @returns {void}
       * @throws Error if Id is not valid
       * @example
       * validateId([-180, -40, 110, 50])
       * //=Error
       * validateId([-180, -40])
       * //=Error
       * validateId('Foo')
       * //=OK
       * validateId(5)
       * //=OK
       * validateId(null)
       * //=Error
       * validateId(undefined)
       * //=Error
       */
      function validateId(id) {
        if (!id) throw new Error('id is required');
        if (['string', 'number'].indexOf(typeof id) === -1)
          throw new Error('id must be a number or a string');
      }

      // Deprecated methods
      function radians2degrees() {
        throw new Error('method has been renamed to `radiansToDegrees`');
      }

      function degrees2radians() {
        throw new Error('method has been renamed to `degreesToRadians`');
      }

      function distanceToDegrees() {
        throw new Error('method has been renamed to `lengthToDegrees`');
      }

      function distanceToRadians() {
        throw new Error('method has been renamed to `lengthToRadians`');
      }

      function radiansToDistance() {
        throw new Error('method has been renamed to `radiansToLength`');
      }

      function bearingToAngle() {
        throw new Error('method has been renamed to `bearingToAzimuth`');
      }

      function convertDistance() {
        throw new Error('method has been renamed to `convertLength`');
      }

      /***/
    },
    /* 4 */
    /***/ function(module, exports, __webpack_require__) {
      var root = __webpack_require__(5);

      /** Built-in value references. */
      var Symbol = root.Symbol;

      module.exports = Symbol;

      /***/
    },
    /* 5 */
    /***/ function(module, exports, __webpack_require__) {
      var freeGlobal = __webpack_require__(11);

      /** Detect free variable `self`. */
      var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

      /** Used as a reference to the global object. */
      var root = freeGlobal || freeSelf || Function('return this')();

      module.exports = root;

      /***/
    },
    /* 6 */
    /***/ function(module, exports) {
      /**
       * Performs a
       * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
       * comparison between two values to determine if they are equivalent.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to compare.
       * @param {*} other The other value to compare.
       * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
       * @example
       *
       * var object = { 'a': 1 };
       * var other = { 'a': 1 };
       *
       * _.eq(object, object);
       * // => true
       *
       * _.eq(object, other);
       * // => false
       *
       * _.eq('a', 'a');
       * // => true
       *
       * _.eq('a', Object('a'));
       * // => false
       *
       * _.eq(NaN, NaN);
       * // => true
       */
      function eq(value, other) {
        return value === other || (value !== value && other !== other);
      }

      module.exports = eq;

      /***/
    },
    /* 7 */
    /***/ function(module, exports, __webpack_require__) {
      var isFunction = __webpack_require__(10),
        isLength = __webpack_require__(16);

      /**
       * Checks if `value` is array-like. A value is considered array-like if it's
       * not a function and has a `value.length` that's an integer greater than or
       * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
       * @example
       *
       * _.isArrayLike([1, 2, 3]);
       * // => true
       *
       * _.isArrayLike(document.body.children);
       * // => true
       *
       * _.isArrayLike('abc');
       * // => true
       *
       * _.isArrayLike(_.noop);
       * // => false
       */
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }

      module.exports = isArrayLike;

      /***/
    },
    /* 8 */
    /***/ function(module, exports, __webpack_require__) {
      var defineProperty = __webpack_require__(9);

      /**
       * The base implementation of `assignValue` and `assignMergeValue` without
       * value checks.
       *
       * @private
       * @param {Object} object The object to modify.
       * @param {string} key The key of the property to assign.
       * @param {*} value The value to assign.
       */
      function baseAssignValue(object, key, value) {
        if (key == '__proto__' && defineProperty) {
          defineProperty(object, key, {
            configurable: true,
            enumerable: true,
            value: value,
            writable: true
          });
        } else {
          object[key] = value;
        }
      }

      module.exports = baseAssignValue;

      /***/
    },
    /* 9 */
    /***/ function(module, exports, __webpack_require__) {
      var getNative = __webpack_require__(35);

      var defineProperty = (function() {
        try {
          var func = getNative(Object, 'defineProperty');
          func({}, '', {});
          return func;
        } catch (e) {}
      })();

      module.exports = defineProperty;

      /***/
    },
    /* 10 */
    /***/ function(module, exports, __webpack_require__) {
      var baseGetTag = __webpack_require__(0),
        isObject = __webpack_require__(2);

      /** `Object#toString` result references. */
      var asyncTag = '[object AsyncFunction]',
        funcTag = '[object Function]',
        genTag = '[object GeneratorFunction]',
        proxyTag = '[object Proxy]';

      /**
       * Checks if `value` is classified as a `Function` object.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a function, else `false`.
       * @example
       *
       * _.isFunction(_);
       * // => true
       *
       * _.isFunction(/abc/);
       * // => false
       */
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        // The use of `Object#toString` avoids issues with the `typeof` operator
        // in Safari 9 which returns 'object' for typed arrays and other constructors.
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }

      module.exports = isFunction;

      /***/
    },
    /* 11 */
    /***/ function(module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */ (function(global) {
        /** Detect free variable `global` from Node.js. */
        var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

        module.exports = freeGlobal;

        /* WEBPACK VAR INJECTION */
      }.call(exports, __webpack_require__(37)));

      /***/
    },
    /* 12 */
    /***/ function(module, exports, __webpack_require__) {
      var identity = __webpack_require__(13),
        overRest = __webpack_require__(45),
        setToString = __webpack_require__(46);

      /**
       * The base implementation of `_.rest` which doesn't validate or coerce arguments.
       *
       * @private
       * @param {Function} func The function to apply a rest parameter to.
       * @param {number} [start=func.length-1] The start position of the rest parameter.
       * @returns {Function} Returns the new function.
       */
      function baseRest(func, start) {
        return setToString(overRest(func, start, identity), func + '');
      }

      module.exports = baseRest;

      /***/
    },
    /* 13 */
    /***/ function(module, exports) {
      /**
       * This method returns the first argument it receives.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Util
       * @param {*} value Any value.
       * @returns {*} Returns `value`.
       * @example
       *
       * var object = { 'a': 1 };
       *
       * console.log(_.identity(object) === object);
       * // => true
       */
      function identity(value) {
        return value;
      }

      module.exports = identity;

      /***/
    },
    /* 14 */
    /***/ function(module, exports) {
      /**
       * A faster alternative to `Function#apply`, this function invokes `func`
       * with the `this` binding of `thisArg` and the arguments of `args`.
       *
       * @private
       * @param {Function} func The function to invoke.
       * @param {*} thisArg The `this` binding of `func`.
       * @param {Array} args The arguments to invoke `func` with.
       * @returns {*} Returns the result of `func`.
       */
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }

      module.exports = apply;

      /***/
    },
    /* 15 */
    /***/ function(module, exports, __webpack_require__) {
      var eq = __webpack_require__(6),
        isArrayLike = __webpack_require__(7),
        isIndex = __webpack_require__(17),
        isObject = __webpack_require__(2);

      /**
       * Checks if the given arguments are from an iteratee call.
       *
       * @private
       * @param {*} value The potential iteratee value argument.
       * @param {*} index The potential iteratee index or key argument.
       * @param {*} object The potential iteratee object argument.
       * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
       *  else `false`.
       */
      function isIterateeCall(value, index, object) {
        if (!isObject(object)) {
          return false;
        }
        var type = typeof index;
        if (
          type == 'number'
            ? isArrayLike(object) && isIndex(index, object.length)
            : type == 'string' && index in object
        ) {
          return eq(object[index], value);
        }
        return false;
      }

      module.exports = isIterateeCall;

      /***/
    },
    /* 16 */
    /***/ function(module, exports) {
      /** Used as references for various `Number` constants. */
      var MAX_SAFE_INTEGER = 9007199254740991;

      /**
       * Checks if `value` is a valid array-like length.
       *
       * **Note:** This method is loosely based on
       * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
       * @example
       *
       * _.isLength(3);
       * // => true
       *
       * _.isLength(Number.MIN_VALUE);
       * // => false
       *
       * _.isLength(Infinity);
       * // => false
       *
       * _.isLength('3');
       * // => false
       */
      function isLength(value) {
        return (
          typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER
        );
      }

      module.exports = isLength;

      /***/
    },
    /* 17 */
    /***/ function(module, exports) {
      /** Used as references for various `Number` constants. */
      var MAX_SAFE_INTEGER = 9007199254740991;

      /** Used to detect unsigned integer values. */
      var reIsUint = /^(?:0|[1-9]\d*)$/;

      /**
       * Checks if `value` is a valid array-like index.
       *
       * @private
       * @param {*} value The value to check.
       * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
       * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
       */
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;

        return (
          !!length &&
          (type == 'number' || (type != 'symbol' && reIsUint.test(value))) &&
          value > -1 && value % 1 == 0 && value < length
        );
      }

      module.exports = isIndex;

      /***/
    },
    /* 18 */
    /***/ function(module, exports, __webpack_require__) {
      var baseTimes = __webpack_require__(51),
        isArguments = __webpack_require__(52),
        isArray = __webpack_require__(19),
        isBuffer = __webpack_require__(54),
        isIndex = __webpack_require__(17),
        isTypedArray = __webpack_require__(56);

      /** Used for built-in method references. */
      var objectProto = Object.prototype;

      /** Used to check objects for own properties. */
      var hasOwnProperty = objectProto.hasOwnProperty;

      /**
       * Creates an array of the enumerable property names of the array-like `value`.
       *
       * @private
       * @param {*} value The value to query.
       * @param {boolean} inherited Specify returning inherited property names.
       * @returns {Array} Returns the array of property names.
       */
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

        for (var key in value) {
          if (
            (inherited || hasOwnProperty.call(value, key)) &&
            !(
              skipIndexes &&
              // Safari 9 has enumerable `arguments.length` in strict mode.
              (key == 'length' ||
                // Node.js 0.10 has enumerable non-index properties on buffers.
                (isBuff && (key == 'offset' || key == 'parent')) ||
                // PhantomJS 2 has enumerable non-index properties on typed arrays.
                (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
                // Skip index properties.
                isIndex(key, length))
            )
          ) {
            result.push(key);
          }
        }
        return result;
      }

      module.exports = arrayLikeKeys;

      /***/
    },
    /* 19 */
    /***/ function(module, exports) {
      /**
       * Checks if `value` is classified as an `Array` object.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an array, else `false`.
       * @example
       *
       * _.isArray([1, 2, 3]);
       * // => true
       *
       * _.isArray(document.body.children);
       * // => false
       *
       * _.isArray('abc');
       * // => false
       *
       * _.isArray(_.noop);
       * // => false
       */
      var isArray = Array.isArray;

      module.exports = isArray;

      /***/
    },
    /* 20 */
    /***/ function(module, exports) {
      module.exports = function(module) {
        if (!module.webpackPolyfill) {
          module.deprecate = function() {};
          module.paths = [];
          // module.parent = undefined by default
          if (!module.children) module.children = [];
          Object.defineProperty(module, 'loaded', {
            enumerable: true,
            get: function() {
              return module.l;
            }
          });
          Object.defineProperty(module, 'id', {
            enumerable: true,
            get: function() {
              return module.i;
            }
          });
          module.webpackPolyfill = 1;
        }
        return module;
      };

      /***/
    },
    /* 21 */
    /***/ function(module, exports) {
      /** Used for built-in method references. */
      var objectProto = Object.prototype;

      /**
       * Checks if `value` is likely a prototype object.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
       */
      function isPrototype(value) {
        var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

        return value === proto;
      }

      module.exports = isPrototype;

      /***/
    },
    /* 22 */
    /***/ function(module, exports, __webpack_require__) {
      var baseGetTag = __webpack_require__(0),
        isObjectLike = __webpack_require__(1),
        isPlainObject = __webpack_require__(63);

      /** `Object#toString` result references. */
      var domExcTag = '[object DOMException]',
        errorTag = '[object Error]';

      /**
       * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
       * `SyntaxError`, `TypeError`, or `URIError` object.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
       * @example
       *
       * _.isError(new Error);
       * // => true
       *
       * _.isError(Error);
       * // => false
       */
      function isError(value) {
        if (!isObjectLike(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return (
          tag == errorTag ||
          tag == domExcTag ||
          (typeof value.message == 'string' &&
            typeof value.name == 'string' &&
            !isPlainObject(value))
        );
      }

      module.exports = isError;

      /***/
    },
    /* 23 */
    /***/ function(module, exports) {
      /**
       * Creates a unary function that invokes `func` with its argument transformed.
       *
       * @private
       * @param {Function} func The function to wrap.
       * @param {Function} transform The argument transform.
       * @returns {Function} Returns the new function.
       */
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }

      module.exports = overArg;

      /***/
    },
    /* 24 */
    /***/ function(module, exports) {
      /**
       * A specialized version of `_.map` for arrays without support for iteratee
       * shorthands.
       *
       * @private
       * @param {Array} [array] The array to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @returns {Array} Returns the new mapped array.
       */
      function arrayMap(array, iteratee) {
        var index = -1,
          length = array == null ? 0 : array.length,
          result = Array(length);

        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }

      module.exports = arrayMap;

      /***/
    },
    /* 25 */
    /***/ function(module, exports) {
      /** Used to match template delimiters. */
      var reInterpolate = /<%=([\s\S]+?)%>/g;

      module.exports = reInterpolate;

      /***/
    },
    /* 26 */
    /***/ function(module, exports, __webpack_require__) {
      var baseToString = __webpack_require__(75);

      /**
       * Converts `value` to a string. An empty string is returned for `null`
       * and `undefined` values. The sign of `-0` is preserved.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to convert.
       * @returns {string} Returns the converted string.
       * @example
       *
       * _.toString(null);
       * // => ''
       *
       * _.toString(-0);
       * // => '-0'
       *
       * _.toString([1, 2, 3]);
       * // => '1,2,3'
       */
      function toString(value) {
        return value == null ? '' : baseToString(value);
      }

      module.exports = toString;

      /***/
    },
    /* 27 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* unused harmony export coordEach */
      /* unused harmony export coordReduce */
      /* unused harmony export propEach */
      /* unused harmony export propReduce */
      /* unused harmony export featureEach */
      /* unused harmony export featureReduce */
      /* unused harmony export coordAll */
      /* unused harmony export geomEach */
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'a', function() {
        return geomReduce;
      });
      /* unused harmony export flattenEach */
      /* unused harmony export flattenReduce */
      /* unused harmony export segmentEach */
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'b', function() {
        return segmentReduce;
      });
      /* unused harmony export lineEach */
      /* unused harmony export lineReduce */
      /* unused harmony export findSegment */
      /* unused harmony export findPoint */
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__turf_helpers__ = __webpack_require__(3);

      /**
       * Callback for coordEach
       *
       * @callback coordEachCallback
       * @param {Array<number>} currentCoord The current coordinate being processed.
       * @param {number} coordIndex The current index of the coordinate being processed.
       * @param {number} featureIndex The current index of the Feature being processed.
       * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
       * @param {number} geometryIndex The current index of the Geometry being processed.
       */

      /**
       * Iterate over coordinates in any GeoJSON object, similar to Array.forEach()
       *
       * @name coordEach
       * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
       * @param {Function} callback a method that takes (currentCoord, coordIndex, featureIndex, multiFeatureIndex)
       * @param {boolean} [excludeWrapCoord=false] whether or not to include the final coordinate of LinearRings that wraps the ring in its iteration.
       * @returns {void}
       * @example
       * var features = turf.featureCollection([
       *   turf.point([26, 37], {"foo": "bar"}),
       *   turf.point([36, 53], {"hello": "world"})
       * ]);
       *
       * turf.coordEach(features, function (currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
       *   //=currentCoord
       *   //=coordIndex
       *   //=featureIndex
       *   //=multiFeatureIndex
       *   //=geometryIndex
       * });
       */
      function coordEach(geojson, callback, excludeWrapCoord) {
        // Handles null Geometry -- Skips this GeoJSON
        if (geojson === null) return;
        var j,
          k,
          l,
          geometry,
          stopG,
          coords,
          geometryMaybeCollection,
          wrapShrink = 0,
          coordIndex = 0,
          isGeometryCollection,
          type = geojson.type,
          isFeatureCollection = type === 'FeatureCollection',
          isFeature = type === 'Feature',
          stop = isFeatureCollection ? geojson.features.length : 1;

        // This logic may look a little weird. The reason why it is that way
        // is because it's trying to be fast. GeoJSON supports multiple kinds
        // of objects at its root: FeatureCollection, Features, Geometries.
        // This function has the responsibility of handling all of them, and that
        // means that some of the `for` loops you see below actually just don't apply
        // to certain inputs. For instance, if you give this just a
        // Point geometry, then both loops are short-circuited and all we do
        // is gradually rename the input until it's called 'geometry'.
        //
        // This also aims to allocate as few resources as possible: just a
        // few numbers and booleans, rather than any temporary arrays as would
        // be required with the normalization approach.
        for (var featureIndex = 0; featureIndex < stop; featureIndex++) {
          geometryMaybeCollection = isFeatureCollection
            ? geojson.features[featureIndex].geometry
            : isFeature
            ? geojson.geometry
            : geojson;
          isGeometryCollection = geometryMaybeCollection
            ? geometryMaybeCollection.type === 'GeometryCollection'
            : false;
          stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;

          for (var geomIndex = 0; geomIndex < stopG; geomIndex++) {
            var multiFeatureIndex = 0;
            var geometryIndex = 0;
            geometry = isGeometryCollection
              ? geometryMaybeCollection.geometries[geomIndex]
              : geometryMaybeCollection;

            // Handles null Geometry -- Skips this geometry
            if (geometry === null) continue;
            coords = geometry.coordinates;
            var geomType = geometry.type;

            wrapShrink =
              excludeWrapCoord && (geomType === 'Polygon' || geomType === 'MultiPolygon') ? 1 : 0;

            switch (geomType) {
              case null:
                break;
              case 'Point':
                if (
                  callback(coords, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) ===
                  false
                )
                  return false;
                coordIndex++;
                multiFeatureIndex++;
                break;
              case 'LineString':
              case 'MultiPoint':
                for (j = 0; j < coords.length; j++) {
                  if (
                    callback(
                      coords[j],
                      coordIndex,
                      featureIndex,
                      multiFeatureIndex,
                      geometryIndex
                    ) === false
                  )
                    return false;
                  coordIndex++;
                  if (geomType === 'MultiPoint') multiFeatureIndex++;
                }
                if (geomType === 'LineString') multiFeatureIndex++;
                break;
              case 'Polygon':
              case 'MultiLineString':
                for (j = 0; j < coords.length; j++) {
                  for (k = 0; k < coords[j].length - wrapShrink; k++) {
                    if (
                      callback(
                        coords[j][k],
                        coordIndex,
                        featureIndex,
                        multiFeatureIndex,
                        geometryIndex
                      ) === false
                    )
                      return false;
                    coordIndex++;
                  }
                  if (geomType === 'MultiLineString') multiFeatureIndex++;
                  if (geomType === 'Polygon') geometryIndex++;
                }
                if (geomType === 'Polygon') multiFeatureIndex++;
                break;
              case 'MultiPolygon':
                for (j = 0; j < coords.length; j++) {
                  if (geomType === 'MultiPolygon') geometryIndex = 0;
                  for (k = 0; k < coords[j].length; k++) {
                    for (l = 0; l < coords[j][k].length - wrapShrink; l++) {
                      if (
                        callback(
                          coords[j][k][l],
                          coordIndex,
                          featureIndex,
                          multiFeatureIndex,
                          geometryIndex
                        ) === false
                      )
                        return false;
                      coordIndex++;
                    }
                    geometryIndex++;
                  }
                  multiFeatureIndex++;
                }
                break;
              case 'GeometryCollection':
                for (j = 0; j < geometry.geometries.length; j++)
                  if (coordEach(geometry.geometries[j], callback, excludeWrapCoord) === false)
                    return false;
                break;
              default:
                throw new Error('Unknown Geometry Type');
            }
          }
        }
      }

      /**
       * Callback for coordReduce
       *
       * The first time the callback function is called, the values provided as arguments depend
       * on whether the reduce method has an initialValue argument.
       *
       * If an initialValue is provided to the reduce method:
       *  - The previousValue argument is initialValue.
       *  - The currentValue argument is the value of the first element present in the array.
       *
       * If an initialValue is not provided:
       *  - The previousValue argument is the value of the first element present in the array.
       *  - The currentValue argument is the value of the second element present in the array.
       *
       * @callback coordReduceCallback
       * @param {*} previousValue The accumulated value previously returned in the last invocation
       * of the callback, or initialValue, if supplied.
       * @param {Array<number>} currentCoord The current coordinate being processed.
       * @param {number} coordIndex The current index of the coordinate being processed.
       * Starts at index 0, if an initialValue is provided, and at index 1 otherwise.
       * @param {number} featureIndex The current index of the Feature being processed.
       * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
       * @param {number} geometryIndex The current index of the Geometry being processed.
       */

      /**
       * Reduce coordinates in any GeoJSON object, similar to Array.reduce()
       *
       * @name coordReduce
       * @param {FeatureCollection|Geometry|Feature} geojson any GeoJSON object
       * @param {Function} callback a method that takes (previousValue, currentCoord, coordIndex)
       * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
       * @param {boolean} [excludeWrapCoord=false] whether or not to include the final coordinate of LinearRings that wraps the ring in its iteration.
       * @returns {*} The value that results from the reduction.
       * @example
       * var features = turf.featureCollection([
       *   turf.point([26, 37], {"foo": "bar"}),
       *   turf.point([36, 53], {"hello": "world"})
       * ]);
       *
       * turf.coordReduce(features, function (previousValue, currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
       *   //=previousValue
       *   //=currentCoord
       *   //=coordIndex
       *   //=featureIndex
       *   //=multiFeatureIndex
       *   //=geometryIndex
       *   return currentCoord;
       * });
       */
      function coordReduce(geojson, callback, initialValue, excludeWrapCoord) {
        var previousValue = initialValue;
        coordEach(
          geojson,
          function(currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
            if (coordIndex === 0 && initialValue === undefined) previousValue = currentCoord;
            else
              previousValue = callback(
                previousValue,
                currentCoord,
                coordIndex,
                featureIndex,
                multiFeatureIndex,
                geometryIndex
              );
          },
          excludeWrapCoord
        );
        return previousValue;
      }

      /**
       * Callback for propEach
       *
       * @callback propEachCallback
       * @param {Object} currentProperties The current Properties being processed.
       * @param {number} featureIndex The current index of the Feature being processed.
       */

      /**
       * Iterate over properties in any GeoJSON object, similar to Array.forEach()
       *
       * @name propEach
       * @param {FeatureCollection|Feature} geojson any GeoJSON object
       * @param {Function} callback a method that takes (currentProperties, featureIndex)
       * @returns {void}
       * @example
       * var features = turf.featureCollection([
       *     turf.point([26, 37], {foo: 'bar'}),
       *     turf.point([36, 53], {hello: 'world'})
       * ]);
       *
       * turf.propEach(features, function (currentProperties, featureIndex) {
       *   //=currentProperties
       *   //=featureIndex
       * });
       */
      function propEach(geojson, callback) {
        var i;
        switch (geojson.type) {
          case 'FeatureCollection':
            for (i = 0; i < geojson.features.length; i++) {
              if (callback(geojson.features[i].properties, i) === false) break;
            }
            break;
          case 'Feature':
            callback(geojson.properties, 0);
            break;
        }
      }

      /**
       * Callback for propReduce
       *
       * The first time the callback function is called, the values provided as arguments depend
       * on whether the reduce method has an initialValue argument.
       *
       * If an initialValue is provided to the reduce method:
       *  - The previousValue argument is initialValue.
       *  - The currentValue argument is the value of the first element present in the array.
       *
       * If an initialValue is not provided:
       *  - The previousValue argument is the value of the first element present in the array.
       *  - The currentValue argument is the value of the second element present in the array.
       *
       * @callback propReduceCallback
       * @param {*} previousValue The accumulated value previously returned in the last invocation
       * of the callback, or initialValue, if supplied.
       * @param {*} currentProperties The current Properties being processed.
       * @param {number} featureIndex The current index of the Feature being processed.
       */

      /**
       * Reduce properties in any GeoJSON object into a single value,
       * similar to how Array.reduce works. However, in this case we lazily run
       * the reduction, so an array of all properties is unnecessary.
       *
       * @name propReduce
       * @param {FeatureCollection|Feature} geojson any GeoJSON object
       * @param {Function} callback a method that takes (previousValue, currentProperties, featureIndex)
       * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
       * @returns {*} The value that results from the reduction.
       * @example
       * var features = turf.featureCollection([
       *     turf.point([26, 37], {foo: 'bar'}),
       *     turf.point([36, 53], {hello: 'world'})
       * ]);
       *
       * turf.propReduce(features, function (previousValue, currentProperties, featureIndex) {
       *   //=previousValue
       *   //=currentProperties
       *   //=featureIndex
       *   return currentProperties
       * });
       */
      function propReduce(geojson, callback, initialValue) {
        var previousValue = initialValue;
        propEach(geojson, function(currentProperties, featureIndex) {
          if (featureIndex === 0 && initialValue === undefined) previousValue = currentProperties;
          else previousValue = callback(previousValue, currentProperties, featureIndex);
        });
        return previousValue;
      }

      /**
       * Callback for featureEach
       *
       * @callback featureEachCallback
       * @param {Feature<any>} currentFeature The current Feature being processed.
       * @param {number} featureIndex The current index of the Feature being processed.
       */

      /**
       * Iterate over features in any GeoJSON object, similar to
       * Array.forEach.
       *
       * @name featureEach
       * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
       * @param {Function} callback a method that takes (currentFeature, featureIndex)
       * @returns {void}
       * @example
       * var features = turf.featureCollection([
       *   turf.point([26, 37], {foo: 'bar'}),
       *   turf.point([36, 53], {hello: 'world'})
       * ]);
       *
       * turf.featureEach(features, function (currentFeature, featureIndex) {
       *   //=currentFeature
       *   //=featureIndex
       * });
       */
      function featureEach(geojson, callback) {
        if (geojson.type === 'Feature') {
          callback(geojson, 0);
        } else if (geojson.type === 'FeatureCollection') {
          for (var i = 0; i < geojson.features.length; i++) {
            if (callback(geojson.features[i], i) === false) break;
          }
        }
      }

      /**
       * Callback for featureReduce
       *
       * The first time the callback function is called, the values provided as arguments depend
       * on whether the reduce method has an initialValue argument.
       *
       * If an initialValue is provided to the reduce method:
       *  - The previousValue argument is initialValue.
       *  - The currentValue argument is the value of the first element present in the array.
       *
       * If an initialValue is not provided:
       *  - The previousValue argument is the value of the first element present in the array.
       *  - The currentValue argument is the value of the second element present in the array.
       *
       * @callback featureReduceCallback
       * @param {*} previousValue The accumulated value previously returned in the last invocation
       * of the callback, or initialValue, if supplied.
       * @param {Feature} currentFeature The current Feature being processed.
       * @param {number} featureIndex The current index of the Feature being processed.
       */

      /**
       * Reduce features in any GeoJSON object, similar to Array.reduce().
       *
       * @name featureReduce
       * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
       * @param {Function} callback a method that takes (previousValue, currentFeature, featureIndex)
       * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
       * @returns {*} The value that results from the reduction.
       * @example
       * var features = turf.featureCollection([
       *   turf.point([26, 37], {"foo": "bar"}),
       *   turf.point([36, 53], {"hello": "world"})
       * ]);
       *
       * turf.featureReduce(features, function (previousValue, currentFeature, featureIndex) {
       *   //=previousValue
       *   //=currentFeature
       *   //=featureIndex
       *   return currentFeature
       * });
       */
      function featureReduce(geojson, callback, initialValue) {
        var previousValue = initialValue;
        featureEach(geojson, function(currentFeature, featureIndex) {
          if (featureIndex === 0 && initialValue === undefined) previousValue = currentFeature;
          else previousValue = callback(previousValue, currentFeature, featureIndex);
        });
        return previousValue;
      }

      /**
       * Get all coordinates from any GeoJSON object.
       *
       * @name coordAll
       * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
       * @returns {Array<Array<number>>} coordinate position array
       * @example
       * var features = turf.featureCollection([
       *   turf.point([26, 37], {foo: 'bar'}),
       *   turf.point([36, 53], {hello: 'world'})
       * ]);
       *
       * var coords = turf.coordAll(features);
       * //= [[26, 37], [36, 53]]
       */
      function coordAll(geojson) {
        var coords = [];
        coordEach(geojson, function(coord) {
          coords.push(coord);
        });
        return coords;
      }

      /**
       * Callback for geomEach
       *
       * @callback geomEachCallback
       * @param {Geometry} currentGeometry The current Geometry being processed.
       * @param {number} featureIndex The current index of the Feature being processed.
       * @param {Object} featureProperties The current Feature Properties being processed.
       * @param {Array<number>} featureBBox The current Feature BBox being processed.
       * @param {number|string} featureId The current Feature Id being processed.
       */

      /**
       * Iterate over each geometry in any GeoJSON object, similar to Array.forEach()
       *
       * @name geomEach
       * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
       * @param {Function} callback a method that takes (currentGeometry, featureIndex, featureProperties, featureBBox, featureId)
       * @returns {void}
       * @example
       * var features = turf.featureCollection([
       *     turf.point([26, 37], {foo: 'bar'}),
       *     turf.point([36, 53], {hello: 'world'})
       * ]);
       *
       * turf.geomEach(features, function (currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
       *   //=currentGeometry
       *   //=featureIndex
       *   //=featureProperties
       *   //=featureBBox
       *   //=featureId
       * });
       */
      function geomEach(geojson, callback) {
        var i,
          j,
          g,
          geometry,
          stopG,
          geometryMaybeCollection,
          isGeometryCollection,
          featureProperties,
          featureBBox,
          featureId,
          featureIndex = 0,
          isFeatureCollection = geojson.type === 'FeatureCollection',
          isFeature = geojson.type === 'Feature',
          stop = isFeatureCollection ? geojson.features.length : 1;

        // This logic may look a little weird. The reason why it is that way
        // is because it's trying to be fast. GeoJSON supports multiple kinds
        // of objects at its root: FeatureCollection, Features, Geometries.
        // This function has the responsibility of handling all of them, and that
        // means that some of the `for` loops you see below actually just don't apply
        // to certain inputs. For instance, if you give this just a
        // Point geometry, then both loops are short-circuited and all we do
        // is gradually rename the input until it's called 'geometry'.
        //
        // This also aims to allocate as few resources as possible: just a
        // few numbers and booleans, rather than any temporary arrays as would
        // be required with the normalization approach.
        for (i = 0; i < stop; i++) {
          geometryMaybeCollection = isFeatureCollection
            ? geojson.features[i].geometry
            : isFeature
            ? geojson.geometry
            : geojson;
          featureProperties = isFeatureCollection
            ? geojson.features[i].properties
            : isFeature
            ? geojson.properties
            : {};
          featureBBox = isFeatureCollection
            ? geojson.features[i].bbox
            : isFeature
            ? geojson.bbox
            : undefined;
          featureId = isFeatureCollection
            ? geojson.features[i].id
            : isFeature
            ? geojson.id
            : undefined;
          isGeometryCollection = geometryMaybeCollection
            ? geometryMaybeCollection.type === 'GeometryCollection'
            : false;
          stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;

          for (g = 0; g < stopG; g++) {
            geometry = isGeometryCollection
              ? geometryMaybeCollection.geometries[g]
              : geometryMaybeCollection;

            // Handle null Geometry
            if (geometry === null) {
              if (callback(null, featureIndex, featureProperties, featureBBox, featureId) === false)
                return false;
              continue;
            }
            switch (geometry.type) {
              case 'Point':
              case 'LineString':
              case 'MultiPoint':
              case 'Polygon':
              case 'MultiLineString':
              case 'MultiPolygon': {
                if (
                  callback(geometry, featureIndex, featureProperties, featureBBox, featureId) ===
                  false
                )
                  return false;
                break;
              }
              case 'GeometryCollection': {
                for (j = 0; j < geometry.geometries.length; j++) {
                  if (
                    callback(
                      geometry.geometries[j],
                      featureIndex,
                      featureProperties,
                      featureBBox,
                      featureId
                    ) === false
                  )
                    return false;
                }
                break;
              }
              default:
                throw new Error('Unknown Geometry Type');
            }
          }
          // Only increase `featureIndex` per each feature
          featureIndex++;
        }
      }

      /**
       * Callback for geomReduce
       *
       * The first time the callback function is called, the values provided as arguments depend
       * on whether the reduce method has an initialValue argument.
       *
       * If an initialValue is provided to the reduce method:
       *  - The previousValue argument is initialValue.
       *  - The currentValue argument is the value of the first element present in the array.
       *
       * If an initialValue is not provided:
       *  - The previousValue argument is the value of the first element present in the array.
       *  - The currentValue argument is the value of the second element present in the array.
       *
       * @callback geomReduceCallback
       * @param {*} previousValue The accumulated value previously returned in the last invocation
       * of the callback, or initialValue, if supplied.
       * @param {Geometry} currentGeometry The current Geometry being processed.
       * @param {number} featureIndex The current index of the Feature being processed.
       * @param {Object} featureProperties The current Feature Properties being processed.
       * @param {Array<number>} featureBBox The current Feature BBox being processed.
       * @param {number|string} featureId The current Feature Id being processed.
       */

      /**
       * Reduce geometry in any GeoJSON object, similar to Array.reduce().
       *
       * @name geomReduce
       * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
       * @param {Function} callback a method that takes (previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId)
       * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
       * @returns {*} The value that results from the reduction.
       * @example
       * var features = turf.featureCollection([
       *     turf.point([26, 37], {foo: 'bar'}),
       *     turf.point([36, 53], {hello: 'world'})
       * ]);
       *
       * turf.geomReduce(features, function (previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
       *   //=previousValue
       *   //=currentGeometry
       *   //=featureIndex
       *   //=featureProperties
       *   //=featureBBox
       *   //=featureId
       *   return currentGeometry
       * });
       */
      function geomReduce(geojson, callback, initialValue) {
        var previousValue = initialValue;
        geomEach(geojson, function(
          currentGeometry,
          featureIndex,
          featureProperties,
          featureBBox,
          featureId
        ) {
          if (featureIndex === 0 && initialValue === undefined) previousValue = currentGeometry;
          else
            previousValue = callback(
              previousValue,
              currentGeometry,
              featureIndex,
              featureProperties,
              featureBBox,
              featureId
            );
        });
        return previousValue;
      }

      /**
       * Callback for flattenEach
       *
       * @callback flattenEachCallback
       * @param {Feature} currentFeature The current flattened feature being processed.
       * @param {number} featureIndex The current index of the Feature being processed.
       * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
       */

      /**
       * Iterate over flattened features in any GeoJSON object, similar to
       * Array.forEach.
       *
       * @name flattenEach
       * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
       * @param {Function} callback a method that takes (currentFeature, featureIndex, multiFeatureIndex)
       * @example
       * var features = turf.featureCollection([
       *     turf.point([26, 37], {foo: 'bar'}),
       *     turf.multiPoint([[40, 30], [36, 53]], {hello: 'world'})
       * ]);
       *
       * turf.flattenEach(features, function (currentFeature, featureIndex, multiFeatureIndex) {
       *   //=currentFeature
       *   //=featureIndex
       *   //=multiFeatureIndex
       * });
       */
      function flattenEach(geojson, callback) {
        geomEach(geojson, function(geometry, featureIndex, properties, bbox, id) {
          // Callback for single geometry
          var type = geometry === null ? null : geometry.type;
          switch (type) {
            case null:
            case 'Point':
            case 'LineString':
            case 'Polygon':
              if (
                callback(
                  Object(__WEBPACK_IMPORTED_MODULE_0__turf_helpers__['b' /* feature */])(
                    geometry,
                    properties,
                    { bbox: bbox, id: id }
                  ),
                  featureIndex,
                  0
                ) === false
              )
                return false;
              return;
          }

          var geomType;

          // Callback for multi-geometry
          switch (type) {
            case 'MultiPoint':
              geomType = 'Point';
              break;
            case 'MultiLineString':
              geomType = 'LineString';
              break;
            case 'MultiPolygon':
              geomType = 'Polygon';
              break;
          }

          for (
            var multiFeatureIndex = 0;
            multiFeatureIndex < geometry.coordinates.length;
            multiFeatureIndex++
          ) {
            var coordinate = geometry.coordinates[multiFeatureIndex];
            var geom = {
              type: geomType,
              coordinates: coordinate
            };
            if (
              callback(
                Object(__WEBPACK_IMPORTED_MODULE_0__turf_helpers__['b' /* feature */])(
                  geom,
                  properties
                ),
                featureIndex,
                multiFeatureIndex
              ) === false
            )
              return false;
          }
        });
      }

      /**
       * Callback for flattenReduce
       *
       * The first time the callback function is called, the values provided as arguments depend
       * on whether the reduce method has an initialValue argument.
       *
       * If an initialValue is provided to the reduce method:
       *  - The previousValue argument is initialValue.
       *  - The currentValue argument is the value of the first element present in the array.
       *
       * If an initialValue is not provided:
       *  - The previousValue argument is the value of the first element present in the array.
       *  - The currentValue argument is the value of the second element present in the array.
       *
       * @callback flattenReduceCallback
       * @param {*} previousValue The accumulated value previously returned in the last invocation
       * of the callback, or initialValue, if supplied.
       * @param {Feature} currentFeature The current Feature being processed.
       * @param {number} featureIndex The current index of the Feature being processed.
       * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
       */

      /**
       * Reduce flattened features in any GeoJSON object, similar to Array.reduce().
       *
       * @name flattenReduce
       * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
       * @param {Function} callback a method that takes (previousValue, currentFeature, featureIndex, multiFeatureIndex)
       * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
       * @returns {*} The value that results from the reduction.
       * @example
       * var features = turf.featureCollection([
       *     turf.point([26, 37], {foo: 'bar'}),
       *     turf.multiPoint([[40, 30], [36, 53]], {hello: 'world'})
       * ]);
       *
       * turf.flattenReduce(features, function (previousValue, currentFeature, featureIndex, multiFeatureIndex) {
       *   //=previousValue
       *   //=currentFeature
       *   //=featureIndex
       *   //=multiFeatureIndex
       *   return currentFeature
       * });
       */
      function flattenReduce(geojson, callback, initialValue) {
        var previousValue = initialValue;
        flattenEach(geojson, function(currentFeature, featureIndex, multiFeatureIndex) {
          if (featureIndex === 0 && multiFeatureIndex === 0 && initialValue === undefined)
            previousValue = currentFeature;
          else
            previousValue = callback(
              previousValue,
              currentFeature,
              featureIndex,
              multiFeatureIndex
            );
        });
        return previousValue;
      }

      /**
       * Callback for segmentEach
       *
       * @callback segmentEachCallback
       * @param {Feature<LineString>} currentSegment The current Segment being processed.
       * @param {number} featureIndex The current index of the Feature being processed.
       * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
       * @param {number} geometryIndex The current index of the Geometry being processed.
       * @param {number} segmentIndex The current index of the Segment being processed.
       * @returns {void}
       */

      /**
       * Iterate over 2-vertex line segment in any GeoJSON object, similar to Array.forEach()
       * (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
       *
       * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON
       * @param {Function} callback a method that takes (currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex)
       * @returns {void}
       * @example
       * var polygon = turf.polygon([[[-50, 5], [-40, -10], [-50, -10], [-40, 5], [-50, 5]]]);
       *
       * // Iterate over GeoJSON by 2-vertex segments
       * turf.segmentEach(polygon, function (currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
       *   //=currentSegment
       *   //=featureIndex
       *   //=multiFeatureIndex
       *   //=geometryIndex
       *   //=segmentIndex
       * });
       *
       * // Calculate the total number of segments
       * var total = 0;
       * turf.segmentEach(polygon, function () {
       *     total++;
       * });
       */
      function segmentEach(geojson, callback) {
        flattenEach(geojson, function(feature$$1, featureIndex, multiFeatureIndex) {
          var segmentIndex = 0;

          // Exclude null Geometries
          if (!feature$$1.geometry) return;
          // (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
          var type = feature$$1.geometry.type;
          if (type === 'Point' || type === 'MultiPoint') return;

          // Generate 2-vertex line segments
          var previousCoords;
          if (
            coordEach(feature$$1, function(
              currentCoord,
              coordIndex,
              featureIndexCoord,
              mutliPartIndexCoord,
              geometryIndex
            ) {
              // Simulating a meta.coordReduce() since `reduce` operations cannot be stopped by returning `false`
              if (previousCoords === undefined) {
                previousCoords = currentCoord;
                return;
              }
              var currentSegment = Object(
                __WEBPACK_IMPORTED_MODULE_0__turf_helpers__['e' /* lineString */]
              )([previousCoords, currentCoord], feature$$1.properties);
              if (
                callback(
                  currentSegment,
                  featureIndex,
                  multiFeatureIndex,
                  geometryIndex,
                  segmentIndex
                ) === false
              )
                return false;
              segmentIndex++;
              previousCoords = currentCoord;
            }) === false
          )
            return false;
        });
      }

      /**
       * Callback for segmentReduce
       *
       * The first time the callback function is called, the values provided as arguments depend
       * on whether the reduce method has an initialValue argument.
       *
       * If an initialValue is provided to the reduce method:
       *  - The previousValue argument is initialValue.
       *  - The currentValue argument is the value of the first element present in the array.
       *
       * If an initialValue is not provided:
       *  - The previousValue argument is the value of the first element present in the array.
       *  - The currentValue argument is the value of the second element present in the array.
       *
       * @callback segmentReduceCallback
       * @param {*} previousValue The accumulated value previously returned in the last invocation
       * of the callback, or initialValue, if supplied.
       * @param {Feature<LineString>} currentSegment The current Segment being processed.
       * @param {number} featureIndex The current index of the Feature being processed.
       * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
       * @param {number} geometryIndex The current index of the Geometry being processed.
       * @param {number} segmentIndex The current index of the Segment being processed.
       */

      /**
       * Reduce 2-vertex line segment in any GeoJSON object, similar to Array.reduce()
       * (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
       *
       * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON
       * @param {Function} callback a method that takes (previousValue, currentSegment, currentIndex)
       * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
       * @returns {void}
       * @example
       * var polygon = turf.polygon([[[-50, 5], [-40, -10], [-50, -10], [-40, 5], [-50, 5]]]);
       *
       * // Iterate over GeoJSON by 2-vertex segments
       * turf.segmentReduce(polygon, function (previousSegment, currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
       *   //= previousSegment
       *   //= currentSegment
       *   //= featureIndex
       *   //= multiFeatureIndex
       *   //= geometryIndex
       *   //= segmentInex
       *   return currentSegment
       * });
       *
       * // Calculate the total number of segments
       * var initialValue = 0
       * var total = turf.segmentReduce(polygon, function (previousValue) {
       *     previousValue++;
       *     return previousValue;
       * }, initialValue);
       */
      function segmentReduce(geojson, callback, initialValue) {
        var previousValue = initialValue;
        var started = false;
        segmentEach(geojson, function(
          currentSegment,
          featureIndex,
          multiFeatureIndex,
          geometryIndex,
          segmentIndex
        ) {
          if (started === false && initialValue === undefined) previousValue = currentSegment;
          else
            previousValue = callback(
              previousValue,
              currentSegment,
              featureIndex,
              multiFeatureIndex,
              geometryIndex,
              segmentIndex
            );
          started = true;
        });
        return previousValue;
      }

      /**
       * Callback for lineEach
       *
       * @callback lineEachCallback
       * @param {Feature<LineString>} currentLine The current LineString|LinearRing being processed
       * @param {number} featureIndex The current index of the Feature being processed
       * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed
       * @param {number} geometryIndex The current index of the Geometry being processed
       */

      /**
       * Iterate over line or ring coordinates in LineString, Polygon, MultiLineString, MultiPolygon Features or Geometries,
       * similar to Array.forEach.
       *
       * @name lineEach
       * @param {Geometry|Feature<LineString|Polygon|MultiLineString|MultiPolygon>} geojson object
       * @param {Function} callback a method that takes (currentLine, featureIndex, multiFeatureIndex, geometryIndex)
       * @example
       * var multiLine = turf.multiLineString([
       *   [[26, 37], [35, 45]],
       *   [[36, 53], [38, 50], [41, 55]]
       * ]);
       *
       * turf.lineEach(multiLine, function (currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
       *   //=currentLine
       *   //=featureIndex
       *   //=multiFeatureIndex
       *   //=geometryIndex
       * });
       */
      function lineEach(geojson, callback) {
        // validation
        if (!geojson) throw new Error('geojson is required');

        flattenEach(geojson, function(feature$$1, featureIndex, multiFeatureIndex) {
          if (feature$$1.geometry === null) return;
          var type = feature$$1.geometry.type;
          var coords = feature$$1.geometry.coordinates;
          switch (type) {
            case 'LineString':
              if (callback(feature$$1, featureIndex, multiFeatureIndex, 0, 0) === false)
                return false;
              break;
            case 'Polygon':
              for (var geometryIndex = 0; geometryIndex < coords.length; geometryIndex++) {
                if (
                  callback(
                    Object(__WEBPACK_IMPORTED_MODULE_0__turf_helpers__['e' /* lineString */])(
                      coords[geometryIndex],
                      feature$$1.properties
                    ),
                    featureIndex,
                    multiFeatureIndex,
                    geometryIndex
                  ) === false
                )
                  return false;
              }
              break;
          }
        });
      }

      /**
       * Callback for lineReduce
       *
       * The first time the callback function is called, the values provided as arguments depend
       * on whether the reduce method has an initialValue argument.
       *
       * If an initialValue is provided to the reduce method:
       *  - The previousValue argument is initialValue.
       *  - The currentValue argument is the value of the first element present in the array.
       *
       * If an initialValue is not provided:
       *  - The previousValue argument is the value of the first element present in the array.
       *  - The currentValue argument is the value of the second element present in the array.
       *
       * @callback lineReduceCallback
       * @param {*} previousValue The accumulated value previously returned in the last invocation
       * of the callback, or initialValue, if supplied.
       * @param {Feature<LineString>} currentLine The current LineString|LinearRing being processed.
       * @param {number} featureIndex The current index of the Feature being processed
       * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed
       * @param {number} geometryIndex The current index of the Geometry being processed
       */

      /**
       * Reduce features in any GeoJSON object, similar to Array.reduce().
       *
       * @name lineReduce
       * @param {Geometry|Feature<LineString|Polygon|MultiLineString|MultiPolygon>} geojson object
       * @param {Function} callback a method that takes (previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex)
       * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
       * @returns {*} The value that results from the reduction.
       * @example
       * var multiPoly = turf.multiPolygon([
       *   turf.polygon([[[12,48],[2,41],[24,38],[12,48]], [[9,44],[13,41],[13,45],[9,44]]]),
       *   turf.polygon([[[5, 5], [0, 0], [2, 2], [4, 4], [5, 5]]])
       * ]);
       *
       * turf.lineReduce(multiPoly, function (previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
       *   //=previousValue
       *   //=currentLine
       *   //=featureIndex
       *   //=multiFeatureIndex
       *   //=geometryIndex
       *   return currentLine
       * });
       */
      function lineReduce(geojson, callback, initialValue) {
        var previousValue = initialValue;
        lineEach(geojson, function(currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
          if (featureIndex === 0 && initialValue === undefined) previousValue = currentLine;
          else
            previousValue = callback(
              previousValue,
              currentLine,
              featureIndex,
              multiFeatureIndex,
              geometryIndex
            );
        });
        return previousValue;
      }

      /**
       * Finds a particular 2-vertex LineString Segment from a GeoJSON using `@turf/meta` indexes.
       *
       * Negative indexes are permitted.
       * Point & MultiPoint will always return null.
       *
       * @param {FeatureCollection|Feature|Geometry} geojson Any GeoJSON Feature or Geometry
       * @param {Object} [options={}] Optional parameters
       * @param {number} [options.featureIndex=0] Feature Index
       * @param {number} [options.multiFeatureIndex=0] Multi-Feature Index
       * @param {number} [options.geometryIndex=0] Geometry Index
       * @param {number} [options.segmentIndex=0] Segment Index
       * @param {Object} [options.properties={}] Translate Properties to output LineString
       * @param {BBox} [options.bbox={}] Translate BBox to output LineString
       * @param {number|string} [options.id={}] Translate Id to output LineString
       * @returns {Feature<LineString>} 2-vertex GeoJSON Feature LineString
       * @example
       * var multiLine = turf.multiLineString([
       *     [[10, 10], [50, 30], [30, 40]],
       *     [[-10, -10], [-50, -30], [-30, -40]]
       * ]);
       *
       * // First Segment (defaults are 0)
       * turf.findSegment(multiLine);
       * // => Feature<LineString<[[10, 10], [50, 30]]>>
       *
       * // First Segment of 2nd Multi Feature
       * turf.findSegment(multiLine, {multiFeatureIndex: 1});
       * // => Feature<LineString<[[-10, -10], [-50, -30]]>>
       *
       * // Last Segment of Last Multi Feature
       * turf.findSegment(multiLine, {multiFeatureIndex: -1, segmentIndex: -1});
       * // => Feature<LineString<[[-50, -30], [-30, -40]]>>
       */
      function findSegment(geojson, options) {
        // Optional Parameters
        options = options || {};
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__turf_helpers__['d' /* isObject */])(options))
          throw new Error('options is invalid');
        var featureIndex = options.featureIndex || 0;
        var multiFeatureIndex = options.multiFeatureIndex || 0;
        var geometryIndex = options.geometryIndex || 0;
        var segmentIndex = options.segmentIndex || 0;

        // Find FeatureIndex
        var properties = options.properties;
        var geometry;

        switch (geojson.type) {
          case 'FeatureCollection':
            if (featureIndex < 0) featureIndex = geojson.features.length + featureIndex;
            properties = properties || geojson.features[featureIndex].properties;
            geometry = geojson.features[featureIndex].geometry;
            break;
          case 'Feature':
            properties = properties || geojson.properties;
            geometry = geojson.geometry;
            break;
          case 'Point':
          case 'MultiPoint':
            return null;
          case 'LineString':
          case 'Polygon':
          case 'MultiLineString':
          case 'MultiPolygon':
            geometry = geojson;
            break;
          default:
            throw new Error('geojson is invalid');
        }

        // Find SegmentIndex
        if (geometry === null) return null;
        var coords = geometry.coordinates;
        switch (geometry.type) {
          case 'Point':
          case 'MultiPoint':
            return null;
          case 'LineString':
            if (segmentIndex < 0) segmentIndex = coords.length + segmentIndex - 1;
            return Object(__WEBPACK_IMPORTED_MODULE_0__turf_helpers__['e' /* lineString */])(
              [coords[segmentIndex], coords[segmentIndex + 1]],
              properties,
              options
            );
          case 'Polygon':
            if (geometryIndex < 0) geometryIndex = coords.length + geometryIndex;
            if (segmentIndex < 0) segmentIndex = coords[geometryIndex].length + segmentIndex - 1;
            return Object(__WEBPACK_IMPORTED_MODULE_0__turf_helpers__['e' /* lineString */])(
              [coords[geometryIndex][segmentIndex], coords[geometryIndex][segmentIndex + 1]],
              properties,
              options
            );
          case 'MultiLineString':
            if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
            if (segmentIndex < 0)
              segmentIndex = coords[multiFeatureIndex].length + segmentIndex - 1;
            return Object(__WEBPACK_IMPORTED_MODULE_0__turf_helpers__['e' /* lineString */])(
              [
                coords[multiFeatureIndex][segmentIndex],
                coords[multiFeatureIndex][segmentIndex + 1]
              ],
              properties,
              options
            );
          case 'MultiPolygon':
            if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
            if (geometryIndex < 0) geometryIndex = coords[multiFeatureIndex].length + geometryIndex;
            if (segmentIndex < 0)
              segmentIndex = coords[multiFeatureIndex][geometryIndex].length - segmentIndex - 1;
            return Object(__WEBPACK_IMPORTED_MODULE_0__turf_helpers__['e' /* lineString */])(
              [
                coords[multiFeatureIndex][geometryIndex][segmentIndex],
                coords[multiFeatureIndex][geometryIndex][segmentIndex + 1]
              ],
              properties,
              options
            );
        }
        throw new Error('geojson is invalid');
      }

      /**
       * Finds a particular Point from a GeoJSON using `@turf/meta` indexes.
       *
       * Negative indexes are permitted.
       *
       * @param {FeatureCollection|Feature|Geometry} geojson Any GeoJSON Feature or Geometry
       * @param {Object} [options={}] Optional parameters
       * @param {number} [options.featureIndex=0] Feature Index
       * @param {number} [options.multiFeatureIndex=0] Multi-Feature Index
       * @param {number} [options.geometryIndex=0] Geometry Index
       * @param {number} [options.coordIndex=0] Coord Index
       * @param {Object} [options.properties={}] Translate Properties to output Point
       * @param {BBox} [options.bbox={}] Translate BBox to output Point
       * @param {number|string} [options.id={}] Translate Id to output Point
       * @returns {Feature<Point>} 2-vertex GeoJSON Feature Point
       * @example
       * var multiLine = turf.multiLineString([
       *     [[10, 10], [50, 30], [30, 40]],
       *     [[-10, -10], [-50, -30], [-30, -40]]
       * ]);
       *
       * // First Segment (defaults are 0)
       * turf.findPoint(multiLine);
       * // => Feature<Point<[10, 10]>>
       *
       * // First Segment of the 2nd Multi-Feature
       * turf.findPoint(multiLine, {multiFeatureIndex: 1});
       * // => Feature<Point<[-10, -10]>>
       *
       * // Last Segment of last Multi-Feature
       * turf.findPoint(multiLine, {multiFeatureIndex: -1, coordIndex: -1});
       * // => Feature<Point<[-30, -40]>>
       */
      function findPoint(geojson, options) {
        // Optional Parameters
        options = options || {};
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__turf_helpers__['d' /* isObject */])(options))
          throw new Error('options is invalid');
        var featureIndex = options.featureIndex || 0;
        var multiFeatureIndex = options.multiFeatureIndex || 0;
        var geometryIndex = options.geometryIndex || 0;
        var coordIndex = options.coordIndex || 0;

        // Find FeatureIndex
        var properties = options.properties;
        var geometry;

        switch (geojson.type) {
          case 'FeatureCollection':
            if (featureIndex < 0) featureIndex = geojson.features.length + featureIndex;
            properties = properties || geojson.features[featureIndex].properties;
            geometry = geojson.features[featureIndex].geometry;
            break;
          case 'Feature':
            properties = properties || geojson.properties;
            geometry = geojson.geometry;
            break;
          case 'Point':
          case 'MultiPoint':
            return null;
          case 'LineString':
          case 'Polygon':
          case 'MultiLineString':
          case 'MultiPolygon':
            geometry = geojson;
            break;
          default:
            throw new Error('geojson is invalid');
        }

        // Find Coord Index
        if (geometry === null) return null;
        var coords = geometry.coordinates;
        switch (geometry.type) {
          case 'Point':
            return Object(__WEBPACK_IMPORTED_MODULE_0__turf_helpers__['f' /* point */])(
              coords,
              properties,
              options
            );
          case 'MultiPoint':
            if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
            return Object(__WEBPACK_IMPORTED_MODULE_0__turf_helpers__['f' /* point */])(
              coords[multiFeatureIndex],
              properties,
              options
            );
          case 'LineString':
            if (coordIndex < 0) coordIndex = coords.length + coordIndex;
            return Object(__WEBPACK_IMPORTED_MODULE_0__turf_helpers__['f' /* point */])(
              coords[coordIndex],
              properties,
              options
            );
          case 'Polygon':
            if (geometryIndex < 0) geometryIndex = coords.length + geometryIndex;
            if (coordIndex < 0) coordIndex = coords[geometryIndex].length + coordIndex;
            return Object(__WEBPACK_IMPORTED_MODULE_0__turf_helpers__['f' /* point */])(
              coords[geometryIndex][coordIndex],
              properties,
              options
            );
          case 'MultiLineString':
            if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
            if (coordIndex < 0) coordIndex = coords[multiFeatureIndex].length + coordIndex;
            return Object(__WEBPACK_IMPORTED_MODULE_0__turf_helpers__['f' /* point */])(
              coords[multiFeatureIndex][coordIndex],
              properties,
              options
            );
          case 'MultiPolygon':
            if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
            if (geometryIndex < 0) geometryIndex = coords[multiFeatureIndex].length + geometryIndex;
            if (coordIndex < 0)
              coordIndex = coords[multiFeatureIndex][geometryIndex].length - coordIndex;
            return Object(__WEBPACK_IMPORTED_MODULE_0__turf_helpers__['f' /* point */])(
              coords[multiFeatureIndex][geometryIndex][coordIndex],
              properties,
              options
            );
        }
        throw new Error('geojson is invalid');
      }

      /***/
    },
    /* 28 */
    /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(29);

      /***/
    },
    /* 29 */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      __webpack_require__(30);

      var _template = __webpack_require__(31);

      var _template2 = _interopRequireDefault(_template);

      var _units = __webpack_require__(79);

      var _units2 = _interopRequireDefault(_units);

      var _calc = __webpack_require__(80);

      var _calc2 = _interopRequireDefault(_calc);

      var _dom = __webpack_require__(85);

      var dom = _interopRequireWildcard(_dom);

      var _symbology = __webpack_require__(86);

      var _symbology2 = _interopRequireDefault(_symbology);

      var _utils = __webpack_require__(87);

      var _templates = __webpack_require__(88);

      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }
          newObj.default = obj;
          return newObj;
        }
      }

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var templateSettings = {
        imports: { numberFormat: _utils.numberFormat },
        interpolate: /{{([\s\S]+?)}}/g // mustache
      };
      var controlTemplateCompiled = (0, _template2.default)(
        _templates.controlTemplate,
        templateSettings
      );
      var resultsTemplateCompiled = (0, _template2.default)(
        _templates.resultsTemplate,
        templateSettings
      );
      var pointPopupTemplateCompiled = (0, _template2.default)(
        _templates.pointPopupTemplate,
        templateSettings
      );
      var linePopupTemplateCompiled = (0, _template2.default)(
        _templates.linePopupTemplate,
        templateSettings
      );
      var areaPopupTemplateCompiled = (0, _template2.default)(
        _templates.areaPopupTemplate,
        templateSettings
      );

      var measureControlReference = null;

      L.Control.Measure = L.Control.extend({
        _className: 'leaflet-control-measure',
        options: {
          units: {},
          position: 'topright',
          primaryLengthUnit: 'feet',
          secondaryLengthUnit: 'miles',
          primaryAreaUnit: 'acres',
          activeColor: '#ABE67E', // base color for map features while actively measuring
          completedColor: '#C8F2BE', // base color for permenant features generated from completed measure
          captureZIndex: 10000, // z-index of the marker used to capture measure events
          popupOptions: {
            // standard leaflet popup options http://leafletjs.com/reference-1.3.0.html#popup-option
            className: 'leaflet-measure-resultpopup',
            autoPanPadding: [10, 10]
          }
        },
        initialize: function initialize(options) {
          L.setOptions(this, options);
          var _options = this.options,
            activeColor = _options.activeColor,
            completedColor = _options.completedColor;

          this._symbols = new _symbology2.default({
            activeColor: activeColor,
            completedColor: completedColor
          });
          this.options.units = L.extend({}, _units2.default, this.options.units);
          this.setupRollBackShortcut();
        },
        setupRollBackShortcut: function setupRollBackShortcut() {
          document.addEventListener('keydown', function(event) {
            var key = event.key;
            if (key === 'Escape') {
              if (measureControlReference) {
                measureControlReference.removeLastVertex();
              }
            }
          });
        },
        removeLastVertex: function removeLastVertex() {
          //Removing vertex representation (Circle)
          var vertexList = Object.entries(this._measureVertexes._layers);

          var lastVertex = vertexList.pop();

          this._measureVertexes.removeLayer(lastVertex[1]).removeLayer(this._captureMarker);
          //Removing last coordinate, updating Area representation
          this._latlngs.pop();

          this._addMeasureArea(this._latlngs);
          this._addMeasureBoundary(this._latlngs);
          //Setting default style to all representation
          var vertexSymbol = this._symbols.getSymbol('measureVertex');

          this._measureVertexes.eachLayer(function(layer) {
            layer.setStyle(vertexSymbol);
            // reset all vertexes to non-active class - only last vertex is active
            // `layer.setStyle({ className: 'layer-measurevertex'})` doesn't work. https://github.com/leaflet/leaflet/issues/2662
            // set attribute on path directly
            if (layer._path) {
              layer._path.setAttribute('class', vertexSymbol.className);
            }
          });

          //Setting active style to new active vertex
          var newActiveVertex = vertexList.pop();

          if (newActiveVertex && newActiveVertex[1]._path) {
            newActiveVertex[1]._path.setAttribute(
              'class',
              this._symbols.getSymbol('measureVertexActive').className
            );
          }

          if (this._latlngs.length == 0) {
            this._initLayout();
            this._updateMeasureStartedNoPoints();
          } else {
            this._updateResults();
            this._updateMeasureStartedWithPoints();
          }
        },
        clear: function clear() {
          if (this._layer && this._map) {
            this._map.removeLayer(this._layer);
          }
        },
        getLayer: function getLayer() {
          return this._layer;
        },
        onAdd: function onAdd(map) {
          this._map = map;
          this._latlngs = [];
          this._initLayout();
          map.on('click', this._collapse, this);
          this._layer = L.layerGroup().addTo(map);
          return this._container;
        },
        onRemove: function onRemove(map) {
          map.off('click', this._collapse, this);
          //map.removeLayer(this._layer);
        },
        _initLayout: function _initLayout() {
          var className = this._className;

          var container = this._container;
          if (!container) {
            container = this._container = L.DomUtil.create('div', className + ' leaflet-bar');
          }

          container.innerHTML = controlTemplateCompiled({
            model: {
              className: className
            }
          });

          // makes this work on IE touch devices by stopping it from firing a mouseout event when the touch is released
          container.setAttribute('aria-haspopup', true);
          L.DomEvent.disableClickPropagation(container);
          L.DomEvent.disableScrollPropagation(container);

          var $toggle = (this.$toggle = (0, _dom.selectOne)('.js-toggle', container)); // collapsed content
          this.$interaction = (0, _dom.selectOne)('.js-interaction', container); // expanded content
          var $start = (0, _dom.selectOne)('.js-start', container); // start button
          var $cancel = (0, _dom.selectOne)('.js-cancel', container); // cancel button
          var $finish = (0, _dom.selectOne)('.js-finish', container); // finish button
          this.$startPrompt = (0, _dom.selectOne)('.js-startprompt', container); // full area with button to start measurment
          this.$measuringPrompt = (0, _dom.selectOne)('.js-measuringprompt', container); // full area with all stuff for active measurement
          this.$startHelp = (0, _dom.selectOne)('.js-starthelp', container); // "Start creating a measurement by adding points"
          this.$results = (0, _dom.selectOne)('.js-results', container); // div with coordinate, linear, area results
          this.$measureTasks = (0, _dom.selectOne)('.js-measuretasks', container); // active measure buttons container

          this._collapse();
          this._updateMeasureNotStarted();

          if (!L.Browser.android) {
            L.DomEvent.on(container, 'mouseenter', this._expand, this);
            L.DomEvent.on(container, 'mouseleave', this._collapse, this);
          }
          L.DomEvent.on($toggle, 'click', L.DomEvent.stop);
          if (L.Browser.touch) {
            L.DomEvent.on($toggle, 'click', this._expand, this);
          } else {
            L.DomEvent.on($toggle, 'focus', this._expand, this);
          }
          L.DomEvent.on($start, 'click', L.DomEvent.stop);
          L.DomEvent.on($start, 'click', this._startMeasure, this);
          L.DomEvent.on($cancel, 'click', L.DomEvent.stop);
          L.DomEvent.on($cancel, 'click', this._cancelMeasure, this);
          L.DomEvent.on($finish, 'click', L.DomEvent.stop);
          L.DomEvent.on($finish, 'click', this._handleMeasureDoubleClick, this);
        },
        _expand: function _expand() {
          dom.hide(this.$toggle);
          dom.show(this.$interaction);
        },
        _collapse: function _collapse() {
          if (!this._locked) {
            dom.hide(this.$interaction);
            dom.show(this.$toggle);
          }
        },
        // move between basic states:
        // measure not started, started/in progress but no points added, in progress and with points
        _updateMeasureNotStarted: function _updateMeasureNotStarted() {
          dom.hide(this.$startHelp);
          dom.hide(this.$results);
          dom.hide(this.$measureTasks);
          dom.hide(this.$measuringPrompt);
          dom.show(this.$startPrompt);
        },
        _updateMeasureStartedNoPoints: function _updateMeasureStartedNoPoints() {
          dom.hide(this.$results);
          dom.show(this.$startHelp);
          dom.show(this.$measureTasks);
          dom.hide(this.$startPrompt);
          dom.show(this.$measuringPrompt);
        },
        _updateMeasureStartedWithPoints: function _updateMeasureStartedWithPoints() {
          dom.hide(this.$startHelp);
          dom.show(this.$results);
          dom.show(this.$measureTasks);
          dom.hide(this.$startPrompt);
          dom.show(this.$measuringPrompt);
        },
        // get state vars and interface ready for measure
        _startMeasure: function _startMeasure() {
          this._locked = true;
          this._measureVertexes = L.featureGroup().addTo(this._layer);
          this._captureMarker = L.marker(this._map.getCenter(), {
            clickable: true,
            zIndexOffset: this.options.captureZIndex,
            opacity: 0,
            autoPanOnFocus: false
          }).addTo(this._layer);
          this._setCaptureMarkerIcon();

          this._captureMarker
            .on('mouseout', this._handleMapMouseOut, this)
            .on('dblclick', this._handleMeasureDoubleClick, this)
            .on('click', this._handleMeasureClick, this);

          this._map
            .on('mousemove', this._handleMeasureMove, this)
            .on('mouseout', this._handleMapMouseOut, this)
            .on('move', this._centerCaptureMarker, this)
            .on('resize', this._setCaptureMarkerIcon, this);

          L.DomEvent.on(this._container, 'mouseenter', this._handleMapMouseOut, this);

          this._updateMeasureStartedNoPoints();

          this._map.fire('measurestart', null, false);
        },

        _cancelMeasure: function _cancelMeasure() {
          this._finishMeasure();
          this._map.fire('cancelmeasure');
        },
        // return to state with no measure in progress, undo `this._startMeasure`
        _finishMeasure: function _finishMeasure() {
          var model = L.extend({}, this._resultsModel, { points: this._latlngs });

          this._locked = false;

          L.DomEvent.off(this._container, 'mouseover', this._handleMapMouseOut, this);

          this._clearMeasure();

          this._captureMarker
            .off('mouseout', this._handleMapMouseOut, this)
            .off('dblclick', this._handleMeasureDoubleClick, this)
            .off('click', this._handleMeasureClick, this);

          this._map
            .off('mousemove', this._handleMeasureMove, this)
            .off('mouseout', this._handleMapMouseOut, this)
            .off('move', this._centerCaptureMarker, this)
            .off('resize', this._setCaptureMarkerIcon, this);

          this._layer.removeLayer(this._measureVertexes).removeLayer(this._captureMarker);
          this._measureVertexes = null;

          this._updateMeasureNotStarted();
          this._collapse();

          this._map.fire('measurefinish', model, false);
        },
        // clear all running measure data
        _clearMeasure: function _clearMeasure() {
          this._latlngs = [];
          this._resultsModel = null;
          this._measureVertexes.clearLayers();
          if (this._measureDrag) {
            this._layer.removeLayer(this._measureDrag);
          }
          if (this._measureArea) {
            this._layer.removeLayer(this._measureArea);
          }
          if (this._measureBoundary) {
            this._layer.removeLayer(this._measureBoundary);
          }
          this._measureDrag = null;
          this._measureArea = null;
          this._measureBoundary = null;
        },
        // centers the event capture marker
        _centerCaptureMarker: function _centerCaptureMarker() {
          this._captureMarker.setLatLng(this._map.getCenter());
        },
        // set icon on the capture marker
        _setCaptureMarkerIcon: function _setCaptureMarkerIcon() {
          this._captureMarker.options.autoPanOnFocus = false;
          this._captureMarker.setIcon(
            L.divIcon({
              iconSize: this._map.getSize().multiplyBy(2)
            })
          );
        },
        // format measurements to nice display string based on units in options
        // `{ lengthDisplay: '100 Feet (0.02 Miles)', areaDisplay: ... }`
        _getMeasurementDisplayStrings: function _getMeasurementDisplayStrings(measurement) {
          var unitDefinitions = this.options.units;

          return {
            lengthDisplay: buildDisplay(
              measurement.length,
              this.options.primaryLengthUnit,
              this.options.secondaryLengthUnit,
              this.options.decPoint,
              this.options.thousandsSep
            ),
            areaDisplay: buildDisplay(
              measurement.area,
              this.options.primaryAreaUnit,
              this.options.secondaryAreaUnit,
              this.options.decPoint,
              this.options.thousandsSep
            )
          };

          function buildDisplay(val, primaryUnit, secondaryUnit, decPoint, thousandsSep) {
            if (primaryUnit && unitDefinitions[primaryUnit]) {
              var display = formatMeasure(
                val,
                unitDefinitions[primaryUnit],
                decPoint,
                thousandsSep
              );
              if (secondaryUnit && unitDefinitions[secondaryUnit]) {
                var formatted = formatMeasure(
                  val,
                  unitDefinitions[secondaryUnit],
                  decPoint,
                  thousandsSep
                );
                display = display + ' (' + formatted + ')';
              }
              return display;
            }
            return formatMeasure(val, null, decPoint, thousandsSep);
          }

          function formatMeasure(val, unit, decPoint, thousandsSep) {
            var unitDisplays = {
              acres: 'Acres',
              feet: 'Pés',
              kilometers: 'Quilômetros',
              hectares: 'Hectares',
              meters: 'Metros',
              miles: 'Milhas',
              sqfeet: 'Pés²',
              sqmeters: 'Metros²',
              sqmiles: 'Milhas²'
            };

            var u = L.extend({ factor: 1, decimals: 0 }, unit);
            var formattedNumber = (0, _utils.numberFormat)(
              val * u.factor,
              u.decimals,
              decPoint || ',',
              thousandsSep || '.'
            );
            var label = unitDisplays[u.display] || u.display;
            return [formattedNumber, label].join(' ');
          }
        },
        // _getCoordinatesResult: function(latlngs)
        // {
        //   let htmlCoords = "";
        //   htmlCoords+="<ul>";

        //   for (let i = 0; i < latlngs.length; i++) {
        //     const ll = latlngs[i];
        //     htmlCoords+="<li>#"+(i+1)+"- Lat: " + ll.lat + " / Long" + ll.lng +"</li>";
        //   }
        //   htmlCoords+="</ul>";

        //   return htmlCoords;
        // },
        // update results area of dom with calced measure from `this._latlngs`
        _updateResults: function _updateResults() {
          var calced = (0, _calc2.default)(this._latlngs);
          var model = (this._resultsModel = L.extend(
            {},
            calced,
            this._getMeasurementDisplayStrings(calced),
            {
              pointCount: this._latlngs.length
            }
          ));

          this.$results.innerHTML = resultsTemplateCompiled({ model: model });
        },
        // mouse move handler while measure in progress
        // adds floating measure marker under cursor
        _handleMeasureMove: function _handleMeasureMove(evt) {
          if (!this._measureDrag) {
            this._measureDrag = L.circleMarker(
              evt.latlng,
              this._symbols.getSymbol('measureDrag')
            ).addTo(this._layer);
          } else {
            this._measureDrag.setLatLng(evt.latlng);
          }
          this._measureDrag.bringToFront();
        },
        showCoordinates: function showCoordinates(coords) {
          if ((0, _dom.selectOne)('#coordinates-div').style.display == 'none') {
            var tableBody = '';
            for (var i = 0; i < coords.length; i++) {
              if (coords.length > 2 && i == coords.length - 1) {
                //Removing last table point if a polygon
                continue;
              }
              var coord = coords[i];

              var utm = proj4('EPSG:4326', 'EPSG:31983', [coord.lng, coord.lat]);

              tableBody += '<tr>';
              tableBody += '<td>' + (i + 1) + '</td>';
              tableBody += '<td>' + coord.lat + '</td>';
              tableBody += '<td>' + coord.lng + '</td>';
              tableBody += '<td>' + utm[0] + '</td>';
              tableBody += '<td>' + utm[1] + '</td>';
              tableBody += '</tr>';
            }

            (0, _dom.selectOne)('#coordinates-tbody').innerHTML = tableBody;

            (0, _dom.selectOne)('#coordinates-div').style.display = 'block';
          } else {
            (0, _dom.selectOne)('#coordinates-div').style.display = 'none';
          }
        },

        // handler for both double click and clicking finish button
        // do final calc and finish out current measure, clear dom and internal state, add permanent map features
        _handleMeasureDoubleClick: function _handleMeasureDoubleClick() {
          var latlngs = this._latlngs;
          var resultFeature = void 0,
            popupContent = void 0;

          this._finishMeasure();

          if (!latlngs.length) {
            return;
          }

          if (latlngs.length > 2) {
            latlngs.push(latlngs[0]); // close path to get full perimeter measurement for areas
          }

          var calced = (0, _calc2.default)(latlngs);

          if (latlngs.length === 1) {
            resultFeature = L.circleMarker(latlngs[0], this._symbols.getSymbol('resultPoint'));
            popupContent = pointPopupTemplateCompiled({
              model: calced
            });
          } else if (latlngs.length === 2) {
            resultFeature = L.polyline(latlngs, this._symbols.getSymbol('resultLine'));
            var model = L.extend({}, calced, this._getMeasurementDisplayStrings(calced));
            popupContent = linePopupTemplateCompiled({
              model: model
            });
          } else {
            resultFeature = L.polygon(latlngs, this._symbols.getSymbol('resultArea'));
            var _model = L.extend({}, calced, this._getMeasurementDisplayStrings(calced));
            popupContent = areaPopupTemplateCompiled({
              model: _model
            });
          }

          var popupContainer = L.DomUtil.create('div', '');

          popupContainer.innerHTML = popupContent;

          var showCoordinatesLink = (0, _dom.selectOne)('.js-coordinates', popupContainer);
          if (showCoordinatesLink) {
            L.DomEvent.on(showCoordinatesLink, 'click', L.DomEvent.stop);
            L.DomEvent.on(
              showCoordinatesLink,
              'click',
              function() {
                this.showCoordinates(latlngs);
              },
              this
            );
          }

          var zoomLink = (0, _dom.selectOne)('.js-zoomto', popupContainer);
          if (zoomLink) {
            L.DomEvent.on(zoomLink, 'click', L.DomEvent.stop);
            L.DomEvent.on(
              zoomLink,
              'click',
              function() {
                if (resultFeature.getBounds) {
                  this._map.fitBounds(resultFeature.getBounds(), {
                    padding: [20, 20],
                    maxZoom: 17
                  });
                } else if (resultFeature.getLatLng) {
                  this._map.panTo(resultFeature.getLatLng());
                }
              },
              this
            );
          }

          var deleteLink = (0, _dom.selectOne)('.js-deletemarkup', popupContainer);
          if (deleteLink) {
            L.DomEvent.on(deleteLink, 'click', L.DomEvent.stop);
            L.DomEvent.on(
              deleteLink,
              'click',
              function() {
                // TODO. maybe remove any event handlers on zoom and delete buttons?
                this._layer.removeLayer(resultFeature);
              },
              this
            );
          }

          resultFeature.addTo(this._layer);
          resultFeature.bindPopup(popupContainer, this.options.popupOptions);
          if (resultFeature.getBounds) {
            resultFeature.openPopup(resultFeature.getBounds().getCenter());
          } else if (resultFeature.getLatLng) {
            resultFeature.openPopup(resultFeature.getLatLng());
          }
          var handler = L.DomUtil.get('header-drag-handle');

          var draggable = new L.Draggable(resultFeature.getPopup()._container, handler);

          draggable.enable();
        },
        // handle map click during ongoing measurement
        // add new clicked point, update measure layers and results ui
        _handleMeasureClick: function _handleMeasureClick(evt) {
          var latlng = this._map.mouseEventToLatLng(evt.originalEvent),
            // get actual latlng instead of the marker's latlng from originalEvent
            lastClick = this._latlngs[this._latlngs.length - 1],
            vertexSymbol = this._symbols.getSymbol('measureVertex');

          if (!lastClick || !latlng.equals(lastClick)) {
            // skip if same point as last click, happens on `dblclick`
            this._latlngs.push(latlng);
            this._addMeasureArea(this._latlngs);
            this._addMeasureBoundary(this._latlngs);

            this._measureVertexes.eachLayer(function(layer) {
              layer.setStyle(vertexSymbol);
              // reset all vertexes to non-active class - only last vertex is active
              // `layer.setStyle({ className: 'layer-measurevertex'})` doesn't work. https://github.com/leaflet/leaflet/issues/2662
              // set attribute on path directly
              if (layer._path) {
                layer._path.setAttribute('class', vertexSymbol.className);
              }
            });

            this._addNewVertex(latlng);

            if (this._measureBoundary) {
              this._measureBoundary.bringToFront();
            }
            this._measureVertexes.bringToFront();
          }

          this._updateResults();
          this._updateMeasureStartedWithPoints();
        },
        // handle map mouse out during ongoing measure
        // remove floating cursor vertex from map
        _handleMapMouseOut: function _handleMapMouseOut() {
          if (this._measureDrag) {
            this._layer.removeLayer(this._measureDrag);
            this._measureDrag = null;
          }
        },
        // add various measure graphics to map - vertex, area, boundary
        _addNewVertex: function _addNewVertex(latlng) {
          L.circleMarker(latlng, this._symbols.getSymbol('measureVertexActive')).addTo(
            this._measureVertexes
          );
        },
        _addMeasureArea: function _addMeasureArea(latlngs) {
          if (latlngs.length < 3) {
            if (this._measureArea) {
              this._layer.removeLayer(this._measureArea);
              this._measureArea = null;
            }
            return;
          }
          if (!this._measureArea) {
            this._measureArea = L.polygon(latlngs, this._symbols.getSymbol('measureArea')).addTo(
              this._layer
            );
          } else {
            this._measureArea.setLatLngs(latlngs);
          }
        },
        _addMeasureBoundary: function _addMeasureBoundary(latlngs) {
          if (latlngs.length < 2) {
            if (this._measureBoundary) {
              this._layer.removeLayer(this._measureBoundary);
              this._measureBoundary = null;
            }
            return;
          }
          if (!this._measureBoundary) {
            this._measureBoundary = L.polyline(
              latlngs,
              this._symbols.getSymbol('measureBoundary')
            ).addTo(this._layer);
          } else {
            this._measureBoundary.setLatLngs(latlngs);
          }
        }
      });

      L.Map.mergeOptions({
        measureControl: false
      });

      L.Map.addInitHook(function() {
        if (this.options.measureControl) {
          this.measureControl = new L.Control.Measure().addTo(this);
          measureControlReference = this.measureControl;
        }
      });

      L.control.measure = function(options) {
        measureControlReference = new L.Control.Measure(options);
        return measureControlReference;
      };

      /***/
    },
    /* 30 */
    /***/ function(module, exports) {
      // removed by extract-text-webpack-plugin
      /***/
    },
    /* 31 */
    /***/ function(module, exports, __webpack_require__) {
      var assignInWith = __webpack_require__(32),
        attempt = __webpack_require__(62),
        baseValues = __webpack_require__(65),
        customDefaultsAssignIn = __webpack_require__(66),
        escapeStringChar = __webpack_require__(67),
        isError = __webpack_require__(22),
        isIterateeCall = __webpack_require__(15),
        keys = __webpack_require__(68),
        reInterpolate = __webpack_require__(25),
        templateSettings = __webpack_require__(71),
        toString = __webpack_require__(26);

      /** Error message constants. */
      var INVALID_TEMPL_VAR_ERROR_TEXT = 'Invalid `variable` option passed into `_.template`';

      /** Used to match empty string literals in compiled template source. */
      var reEmptyStringLeading = /\b__p \+= '';/g,
        reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
        reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

      /**
       * Used to validate the `validate` option in `_.template` variable.
       *
       * Forbids characters which could potentially change the meaning of the function argument definition:
       * - "()," (modification of function parameters)
       * - "=" (default value)
       * - "[]{}" (destructuring of function parameters)
       * - "/" (beginning of a comment)
       * - whitespace
       */
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;

      /**
       * Used to match
       * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
       */
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

      /** Used to ensure capturing order of template delimiters. */
      var reNoMatch = /($^)/;

      /** Used to match unescaped characters in compiled string literals. */
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

      /** Used for built-in method references. */
      var objectProto = Object.prototype;

      /** Used to check objects for own properties. */
      var hasOwnProperty = objectProto.hasOwnProperty;

      /**
       * Creates a compiled template function that can interpolate data properties
       * in "interpolate" delimiters, HTML-escape interpolated data properties in
       * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
       * properties may be accessed as free variables in the template. If a setting
       * object is given, it takes precedence over `_.templateSettings` values.
       *
       * **Note:** In the development build `_.template` utilizes
       * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
       * for easier debugging.
       *
       * For more information on precompiling templates see
       * [lodash's custom builds documentation](https://lodash.com/custom-builds).
       *
       * For more information on Chrome extension sandboxes see
       * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category String
       * @param {string} [string=''] The template string.
       * @param {Object} [options={}] The options object.
       * @param {RegExp} [options.escape=_.templateSettings.escape]
       *  The HTML "escape" delimiter.
       * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
       *  The "evaluate" delimiter.
       * @param {Object} [options.imports=_.templateSettings.imports]
       *  An object to import into the template as free variables.
       * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
       *  The "interpolate" delimiter.
       * @param {string} [options.sourceURL='templateSources[n]']
       *  The sourceURL of the compiled template.
       * @param {string} [options.variable='obj']
       *  The data object variable name.
       * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
       * @returns {Function} Returns the compiled template function.
       * @example
       *
       * // Use the "interpolate" delimiter to create a compiled template.
       * var compiled = _.template('hello <%= user %>!');
       * compiled({ 'user': 'fred' });
       * // => 'hello fred!'
       *
       * // Use the HTML "escape" delimiter to escape data property values.
       * var compiled = _.template('<b><%- value %></b>');
       * compiled({ 'value': '<script>' });
       * // => '<b>&lt;script&gt;</b>'
       *
       * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
       * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
       * compiled({ 'users': ['fred', 'barney'] });
       * // => '<li>fred</li><li>barney</li>'
       *
       * // Use the internal `print` function in "evaluate" delimiters.
       * var compiled = _.template('<% print("hello " + user); %>!');
       * compiled({ 'user': 'barney' });
       * // => 'hello barney!'
       *
       * // Use the ES template literal delimiter as an "interpolate" delimiter.
       * // Disable support by replacing the "interpolate" delimiter.
       * var compiled = _.template('hello ${ user }!');
       * compiled({ 'user': 'pebbles' });
       * // => 'hello pebbles!'
       *
       * // Use backslashes to treat delimiters as plain text.
       * var compiled = _.template('<%= "\\<%- value %\\>" %>');
       * compiled({ 'value': 'ignored' });
       * // => '<%- value %>'
       *
       * // Use the `imports` option to import `jQuery` as `jq`.
       * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
       * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
       * compiled({ 'users': ['fred', 'barney'] });
       * // => '<li>fred</li><li>barney</li>'
       *
       * // Use the `sourceURL` option to specify a custom sourceURL for the template.
       * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
       * compiled(data);
       * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
       *
       * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
       * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
       * compiled.source;
       * // => function(data) {
       * //   var __t, __p = '';
       * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
       * //   return __p;
       * // }
       *
       * // Use custom template delimiters.
       * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
       * var compiled = _.template('hello {{ user }}!');
       * compiled({ 'user': 'mustache' });
       * // => 'hello mustache!'
       *
       * // Use the `source` property to inline compiled templates for meaningful
       * // line numbers in error messages and stack traces.
       * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
       *   var JST = {\
       *     "main": ' + _.template(mainText).source + '\
       *   };\
       * ');
       */
      function template(string, options, guard) {
        // Based on John Resig's `tmpl` implementation
        // (http://ejohn.org/blog/javascript-micro-templating/)
        // and Laura Doktorova's doT.js (https://github.com/olado/doT).
        var settings = templateSettings.imports._.templateSettings || templateSettings;

        if (guard && isIterateeCall(string, options, guard)) {
          options = undefined;
        }
        string = toString(string);
        options = assignInWith({}, options, settings, customDefaultsAssignIn);

        var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

        var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

        // Compile the regexp to match each delimiter.
        var reDelimiters = RegExp(
          (options.escape || reNoMatch).source +
            '|' +
            interpolate.source +
            '|' +
            (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source +
            '|' +
            (options.evaluate || reNoMatch).source +
            '|$',
          'g'
        );

        // Use a sourceURL for easier debugging.
        // The sourceURL gets injected into the source that's eval-ed, so be careful
        // to normalize all kinds of whitespace, so e.g. newlines (and unicode versions of it) can't sneak in
        // and escape the comment, thus injecting code that gets evaled.
        var sourceURL = hasOwnProperty.call(options, 'sourceURL')
          ? '//# sourceURL=' + (options.sourceURL + '').replace(/\s/g, ' ') + '\n'
          : '';

        string.replace(reDelimiters, function(
          match,
          escapeValue,
          interpolateValue,
          esTemplateValue,
          evaluateValue,
          offset
        ) {
          interpolateValue || (interpolateValue = esTemplateValue);

          // Escape characters that can't be included in string literals.
          source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

          // Replace delimiters with snippets.
          if (escapeValue) {
            isEscaping = true;
            source += "' +\n__e(" + escapeValue + ") +\n'";
          }
          if (evaluateValue) {
            isEvaluating = true;
            source += "';\n" + evaluateValue + ";\n__p += '";
          }
          if (interpolateValue) {
            source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
          }
          index = offset + match.length;

          // The JS engine embedded in Adobe products needs `match` returned in
          // order to produce the correct `offset` value.
          return match;
        });

        source += "';\n";

        // If `variable` is not specified wrap a with-statement around the generated
        // code to add the data object to the top of the scope chain.
        var variable = hasOwnProperty.call(options, 'variable') && options.variable;
        if (!variable) {
          source = 'with (obj) {\n' + source + '\n}\n';
        }
        // Throw an error if a forbidden character was found in `variable`, to prevent
        // potential command injection attacks.
        else if (reForbiddenIdentifierChars.test(variable)) {
          throw new Error(INVALID_TEMPL_VAR_ERROR_TEXT);
        }

        // Cleanup code by stripping empty strings.
        source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
          .replace(reEmptyStringMiddle, '$1')
          .replace(reEmptyStringTrailing, '$1;');

        // Frame code as the function body.
        source =
          'function(' +
          (variable || 'obj') +
          ') {\n' +
          (variable ? '' : 'obj || (obj = {});\n') +
          "var __t, __p = ''" +
          (isEscaping ? ', __e = _.escape' : '') +
          (isEvaluating
            ? ', __j = Array.prototype.join;\n' +
              "function print() { __p += __j.call(arguments, '') }\n"
            : ';\n') +
          source +
          'return __p\n}';

        var result = attempt(function() {
          return Function(importsKeys, sourceURL + 'return ' + source).apply(
            undefined,
            importsValues
          );
        });

        // Provide the compiled function's source by its `toString` method or
        // the `source` property as a convenience for inlining compiled templates.
        result.source = source;
        if (isError(result)) {
          throw result;
        }
        return result;
      }

      module.exports = template;

      /***/
    },
    /* 32 */
    /***/ function(module, exports, __webpack_require__) {
      var copyObject = __webpack_require__(33),
        createAssigner = __webpack_require__(44),
        keysIn = __webpack_require__(50);

      /**
       * This method is like `_.assignIn` except that it accepts `customizer`
       * which is invoked to produce the assigned values. If `customizer` returns
       * `undefined`, assignment is handled by the method instead. The `customizer`
       * is invoked with five arguments: (objValue, srcValue, key, object, source).
       *
       * **Note:** This method mutates `object`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @alias extendWith
       * @category Object
       * @param {Object} object The destination object.
       * @param {...Object} sources The source objects.
       * @param {Function} [customizer] The function to customize assigned values.
       * @returns {Object} Returns `object`.
       * @see _.assignWith
       * @example
       *
       * function customizer(objValue, srcValue) {
       *   return _.isUndefined(objValue) ? srcValue : objValue;
       * }
       *
       * var defaults = _.partialRight(_.assignInWith, customizer);
       *
       * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
       * // => { 'a': 1, 'b': 2 }
       */
      var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
        copyObject(source, keysIn(source), object, customizer);
      });

      module.exports = assignInWith;

      /***/
    },
    /* 33 */
    /***/ function(module, exports, __webpack_require__) {
      var assignValue = __webpack_require__(34),
        baseAssignValue = __webpack_require__(8);

      /**
       * Copies properties of `source` to `object`.
       *
       * @private
       * @param {Object} source The object to copy properties from.
       * @param {Array} props The property identifiers to copy.
       * @param {Object} [object={}] The object to copy properties to.
       * @param {Function} [customizer] The function to customize copied values.
       * @returns {Object} Returns `object`.
       */
      function copyObject(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});

        var index = -1,
          length = props.length;

        while (++index < length) {
          var key = props[index];

          var newValue = customizer
            ? customizer(object[key], source[key], key, object, source)
            : undefined;

          if (newValue === undefined) {
            newValue = source[key];
          }
          if (isNew) {
            baseAssignValue(object, key, newValue);
          } else {
            assignValue(object, key, newValue);
          }
        }
        return object;
      }

      module.exports = copyObject;

      /***/
    },
    /* 34 */
    /***/ function(module, exports, __webpack_require__) {
      var baseAssignValue = __webpack_require__(8),
        eq = __webpack_require__(6);

      /** Used for built-in method references. */
      var objectProto = Object.prototype;

      /** Used to check objects for own properties. */
      var hasOwnProperty = objectProto.hasOwnProperty;

      /**
       * Assigns `value` to `key` of `object` if the existing value is not equivalent
       * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
       * for equality comparisons.
       *
       * @private
       * @param {Object} object The object to modify.
       * @param {string} key The key of the property to assign.
       * @param {*} value The value to assign.
       */
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (
          !(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))
        ) {
          baseAssignValue(object, key, value);
        }
      }

      module.exports = assignValue;

      /***/
    },
    /* 35 */
    /***/ function(module, exports, __webpack_require__) {
      var baseIsNative = __webpack_require__(36),
        getValue = __webpack_require__(43);

      /**
       * Gets the native function at `key` of `object`.
       *
       * @private
       * @param {Object} object The object to query.
       * @param {string} key The key of the method to get.
       * @returns {*} Returns the function if it's native, else `undefined`.
       */
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : undefined;
      }

      module.exports = getNative;

      /***/
    },
    /* 36 */
    /***/ function(module, exports, __webpack_require__) {
      var isFunction = __webpack_require__(10),
        isMasked = __webpack_require__(40),
        isObject = __webpack_require__(2),
        toSource = __webpack_require__(42);

      /**
       * Used to match `RegExp`
       * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
       */
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

      /** Used to detect host constructors (Safari). */
      var reIsHostCtor = /^\[object .+?Constructor\]$/;

      /** Used for built-in method references. */
      var funcProto = Function.prototype,
        objectProto = Object.prototype;

      /** Used to resolve the decompiled source of functions. */
      var funcToString = funcProto.toString;

      /** Used to check objects for own properties. */
      var hasOwnProperty = objectProto.hasOwnProperty;

      /** Used to detect if a method is native. */
      var reIsNative = RegExp(
        '^' +
          funcToString
            .call(hasOwnProperty)
            .replace(reRegExpChar, '\\$&')
            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
          '$'
      );

      /**
       * The base implementation of `_.isNative` without bad shim checks.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a native function,
       *  else `false`.
       */
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }

      module.exports = baseIsNative;

      /***/
    },
    /* 37 */
    /***/ function(module, exports) {
      var g;

      // This works in non-strict mode
      g = (function() {
        return this;
      })();

      try {
        // This works if eval is allowed (see CSP)
        g = g || Function('return this')() || (1, eval)('this');
      } catch (e) {
        // This works if the window reference is available
        if (typeof window === 'object') g = window;
      }

      // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}

      module.exports = g;

      /***/
    },
    /* 38 */
    /***/ function(module, exports, __webpack_require__) {
      var Symbol = __webpack_require__(4);

      /** Used for built-in method references. */
      var objectProto = Object.prototype;

      /** Used to check objects for own properties. */
      var hasOwnProperty = objectProto.hasOwnProperty;

      /**
       * Used to resolve the
       * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
       * of values.
       */
      var nativeObjectToString = objectProto.toString;

      /** Built-in value references. */
      var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

      /**
       * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
       *
       * @private
       * @param {*} value The value to query.
       * @returns {string} Returns the raw `toStringTag`.
       */
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

        try {
          value[symToStringTag] = undefined;
          var unmasked = true;
        } catch (e) {}

        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }

      module.exports = getRawTag;

      /***/
    },
    /* 39 */
    /***/ function(module, exports) {
      /** Used for built-in method references. */
      var objectProto = Object.prototype;

      /**
       * Used to resolve the
       * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
       * of values.
       */
      var nativeObjectToString = objectProto.toString;

      /**
       * Converts `value` to a string using `Object.prototype.toString`.
       *
       * @private
       * @param {*} value The value to convert.
       * @returns {string} Returns the converted string.
       */
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }

      module.exports = objectToString;

      /***/
    },
    /* 40 */
    /***/ function(module, exports, __webpack_require__) {
      var coreJsData = __webpack_require__(41);

      /** Used to detect methods masquerading as native. */
      var maskSrcKey = (function() {
        var uid = /[^.]+$/.exec((coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || '');
        return uid ? 'Symbol(src)_1.' + uid : '';
      })();

      /**
       * Checks if `func` has its source masked.
       *
       * @private
       * @param {Function} func The function to check.
       * @returns {boolean} Returns `true` if `func` is masked, else `false`.
       */
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }

      module.exports = isMasked;

      /***/
    },
    /* 41 */
    /***/ function(module, exports, __webpack_require__) {
      var root = __webpack_require__(5);

      /** Used to detect overreaching core-js shims. */
      var coreJsData = root['__core-js_shared__'];

      module.exports = coreJsData;

      /***/
    },
    /* 42 */
    /***/ function(module, exports) {
      /** Used for built-in method references. */
      var funcProto = Function.prototype;

      /** Used to resolve the decompiled source of functions. */
      var funcToString = funcProto.toString;

      /**
       * Converts `func` to its source code.
       *
       * @private
       * @param {Function} func The function to convert.
       * @returns {string} Returns the source code.
       */
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {}
          try {
            return func + '';
          } catch (e) {}
        }
        return '';
      }

      module.exports = toSource;

      /***/
    },
    /* 43 */
    /***/ function(module, exports) {
      /**
       * Gets the value at `key` of `object`.
       *
       * @private
       * @param {Object} [object] The object to query.
       * @param {string} key The key of the property to get.
       * @returns {*} Returns the property value.
       */
      function getValue(object, key) {
        return object == null ? undefined : object[key];
      }

      module.exports = getValue;

      /***/
    },
    /* 44 */
    /***/ function(module, exports, __webpack_require__) {
      var baseRest = __webpack_require__(12),
        isIterateeCall = __webpack_require__(15);

      /**
       * Creates a function like `_.assign`.
       *
       * @private
       * @param {Function} assigner The function to assign values.
       * @returns {Function} Returns the new assigner function.
       */
      function createAssigner(assigner) {
        return baseRest(function(object, sources) {
          var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;

          customizer =
            assigner.length > 3 && typeof customizer == 'function'
              ? (length--, customizer)
              : undefined;

          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined : customizer;
            length = 1;
          }
          object = Object(object);
          while (++index < length) {
            var source = sources[index];
            if (source) {
              assigner(object, source, index, customizer);
            }
          }
          return object;
        });
      }

      module.exports = createAssigner;

      /***/
    },
    /* 45 */
    /***/ function(module, exports, __webpack_require__) {
      var apply = __webpack_require__(14);

      /* Built-in method references for those with the same name as other `lodash` methods. */
      var nativeMax = Math.max;

      /**
       * A specialized version of `baseRest` which transforms the rest array.
       *
       * @private
       * @param {Function} func The function to apply a rest parameter to.
       * @param {number} [start=func.length-1] The start position of the rest parameter.
       * @param {Function} transform The rest array transform.
       * @returns {Function} Returns the new function.
       */
      function overRest(func, start, transform) {
        start = nativeMax(start === undefined ? func.length - 1 : start, 0);
        return function() {
          var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

          while (++index < length) {
            array[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform(array);
          return apply(func, this, otherArgs);
        };
      }

      module.exports = overRest;

      /***/
    },
    /* 46 */
    /***/ function(module, exports, __webpack_require__) {
      var baseSetToString = __webpack_require__(47),
        shortOut = __webpack_require__(49);

      /**
       * Sets the `toString` method of `func` to return `string`.
       *
       * @private
       * @param {Function} func The function to modify.
       * @param {Function} string The `toString` result.
       * @returns {Function} Returns `func`.
       */
      var setToString = shortOut(baseSetToString);

      module.exports = setToString;

      /***/
    },
    /* 47 */
    /***/ function(module, exports, __webpack_require__) {
      var constant = __webpack_require__(48),
        defineProperty = __webpack_require__(9),
        identity = __webpack_require__(13);

      /**
       * The base implementation of `setToString` without support for hot loop shorting.
       *
       * @private
       * @param {Function} func The function to modify.
       * @param {Function} string The `toString` result.
       * @returns {Function} Returns `func`.
       */
      var baseSetToString = !defineProperty
        ? identity
        : function(func, string) {
            return defineProperty(func, 'toString', {
              configurable: true,
              enumerable: false,
              value: constant(string),
              writable: true
            });
          };

      module.exports = baseSetToString;

      /***/
    },
    /* 48 */
    /***/ function(module, exports) {
      /**
       * Creates a function that returns `value`.
       *
       * @static
       * @memberOf _
       * @since 2.4.0
       * @category Util
       * @param {*} value The value to return from the new function.
       * @returns {Function} Returns the new constant function.
       * @example
       *
       * var objects = _.times(2, _.constant({ 'a': 1 }));
       *
       * console.log(objects);
       * // => [{ 'a': 1 }, { 'a': 1 }]
       *
       * console.log(objects[0] === objects[1]);
       * // => true
       */
      function constant(value) {
        return function() {
          return value;
        };
      }

      module.exports = constant;

      /***/
    },
    /* 49 */
    /***/ function(module, exports) {
      /** Used to detect hot functions by number of calls within a span of milliseconds. */
      var HOT_COUNT = 800,
        HOT_SPAN = 16;

      /* Built-in method references for those with the same name as other `lodash` methods. */
      var nativeNow = Date.now;

      /**
       * Creates a function that'll short out and invoke `identity` instead
       * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
       * milliseconds.
       *
       * @private
       * @param {Function} func The function to restrict.
       * @returns {Function} Returns the new shortable function.
       */
      function shortOut(func) {
        var count = 0,
          lastCalled = 0;

        return function() {
          var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(undefined, arguments);
        };
      }

      module.exports = shortOut;

      /***/
    },
    /* 50 */
    /***/ function(module, exports, __webpack_require__) {
      var arrayLikeKeys = __webpack_require__(18),
        baseKeysIn = __webpack_require__(60),
        isArrayLike = __webpack_require__(7);

      /**
       * Creates an array of the own and inherited enumerable property names of `object`.
       *
       * **Note:** Non-object values are coerced to objects.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Object
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.keysIn(new Foo);
       * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
       */
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }

      module.exports = keysIn;

      /***/
    },
    /* 51 */
    /***/ function(module, exports) {
      /**
       * The base implementation of `_.times` without support for iteratee shorthands
       * or max array length checks.
       *
       * @private
       * @param {number} n The number of times to invoke `iteratee`.
       * @param {Function} iteratee The function invoked per iteration.
       * @returns {Array} Returns the array of results.
       */
      function baseTimes(n, iteratee) {
        var index = -1,
          result = Array(n);

        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }

      module.exports = baseTimes;

      /***/
    },
    /* 52 */
    /***/ function(module, exports, __webpack_require__) {
      var baseIsArguments = __webpack_require__(53),
        isObjectLike = __webpack_require__(1);

      /** Used for built-in method references. */
      var objectProto = Object.prototype;

      /** Used to check objects for own properties. */
      var hasOwnProperty = objectProto.hasOwnProperty;

      /** Built-in value references. */
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;

      /**
       * Checks if `value` is likely an `arguments` object.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an `arguments` object,
       *  else `false`.
       * @example
       *
       * _.isArguments(function() { return arguments; }());
       * // => true
       *
       * _.isArguments([1, 2, 3]);
       * // => false
       */
      var isArguments = baseIsArguments(
        (function() {
          return arguments;
        })()
      )
        ? baseIsArguments
        : function(value) {
            return (
              isObjectLike(value) &&
              hasOwnProperty.call(value, 'callee') &&
              !propertyIsEnumerable.call(value, 'callee')
            );
          };

      module.exports = isArguments;

      /***/
    },
    /* 53 */
    /***/ function(module, exports, __webpack_require__) {
      var baseGetTag = __webpack_require__(0),
        isObjectLike = __webpack_require__(1);

      /** `Object#toString` result references. */
      var argsTag = '[object Arguments]';

      /**
       * The base implementation of `_.isArguments`.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an `arguments` object,
       */
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }

      module.exports = baseIsArguments;

      /***/
    },
    /* 54 */
    /***/ function(module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */ (function(module) {
        var root = __webpack_require__(5),
          stubFalse = __webpack_require__(55);

        /** Detect free variable `exports`. */
        var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

        /** Detect free variable `module`. */
        var freeModule =
          freeExports && typeof module == 'object' && module && !module.nodeType && module;

        /** Detect the popular CommonJS extension `module.exports`. */
        var moduleExports = freeModule && freeModule.exports === freeExports;

        /** Built-in value references. */
        var Buffer = moduleExports ? root.Buffer : undefined;

        /* Built-in method references for those with the same name as other `lodash` methods. */
        var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

        /**
         * Checks if `value` is a buffer.
         *
         * @static
         * @memberOf _
         * @since 4.3.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
         * @example
         *
         * _.isBuffer(new Buffer(2));
         * // => true
         *
         * _.isBuffer(new Uint8Array(2));
         * // => false
         */
        var isBuffer = nativeIsBuffer || stubFalse;

        module.exports = isBuffer;

        /* WEBPACK VAR INJECTION */
      }.call(exports, __webpack_require__(20)(module)));

      /***/
    },
    /* 55 */
    /***/ function(module, exports) {
      /**
       * This method returns `false`.
       *
       * @static
       * @memberOf _
       * @since 4.13.0
       * @category Util
       * @returns {boolean} Returns `false`.
       * @example
       *
       * _.times(2, _.stubFalse);
       * // => [false, false]
       */
      function stubFalse() {
        return false;
      }

      module.exports = stubFalse;

      /***/
    },
    /* 56 */
    /***/ function(module, exports, __webpack_require__) {
      var baseIsTypedArray = __webpack_require__(57),
        baseUnary = __webpack_require__(58),
        nodeUtil = __webpack_require__(59);

      /* Node.js helper references. */
      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

      /**
       * Checks if `value` is classified as a typed array.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
       * @example
       *
       * _.isTypedArray(new Uint8Array);
       * // => true
       *
       * _.isTypedArray([]);
       * // => false
       */
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

      module.exports = isTypedArray;

      /***/
    },
    /* 57 */
    /***/ function(module, exports, __webpack_require__) {
      var baseGetTag = __webpack_require__(0),
        isLength = __webpack_require__(16),
        isObjectLike = __webpack_require__(1);

      /** `Object#toString` result references. */
      var argsTag = '[object Arguments]',
        arrayTag = '[object Array]',
        boolTag = '[object Boolean]',
        dateTag = '[object Date]',
        errorTag = '[object Error]',
        funcTag = '[object Function]',
        mapTag = '[object Map]',
        numberTag = '[object Number]',
        objectTag = '[object Object]',
        regexpTag = '[object RegExp]',
        setTag = '[object Set]',
        stringTag = '[object String]',
        weakMapTag = '[object WeakMap]';

      var arrayBufferTag = '[object ArrayBuffer]',
        dataViewTag = '[object DataView]',
        float32Tag = '[object Float32Array]',
        float64Tag = '[object Float64Array]',
        int8Tag = '[object Int8Array]',
        int16Tag = '[object Int16Array]',
        int32Tag = '[object Int32Array]',
        uint8Tag = '[object Uint8Array]',
        uint8ClampedTag = '[object Uint8ClampedArray]',
        uint16Tag = '[object Uint16Array]',
        uint32Tag = '[object Uint32Array]';

      /** Used to identify `toStringTag` values of typed arrays. */
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[
        int8Tag
      ] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[
        uint8Tag
      ] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[
        uint32Tag
      ] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[
        arrayBufferTag
      ] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[
        dateTag
      ] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[
        mapTag
      ] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[
        regexpTag
      ] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

      /**
       * The base implementation of `_.isTypedArray` without Node.js optimizations.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
       */
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }

      module.exports = baseIsTypedArray;

      /***/
    },
    /* 58 */
    /***/ function(module, exports) {
      /**
       * The base implementation of `_.unary` without support for storing metadata.
       *
       * @private
       * @param {Function} func The function to cap arguments for.
       * @returns {Function} Returns the new capped function.
       */
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }

      module.exports = baseUnary;

      /***/
    },
    /* 59 */
    /***/ function(module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */ (function(module) {
        var freeGlobal = __webpack_require__(11);

        /** Detect free variable `exports`. */
        var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

        /** Detect free variable `module`. */
        var freeModule =
          freeExports && typeof module == 'object' && module && !module.nodeType && module;

        /** Detect the popular CommonJS extension `module.exports`. */
        var moduleExports = freeModule && freeModule.exports === freeExports;

        /** Detect free variable `process` from Node.js. */
        var freeProcess = moduleExports && freeGlobal.process;

        /** Used to access faster Node.js helpers. */
        var nodeUtil = (function() {
          try {
            // Use `util.types` for Node.js 10+.
            var types = freeModule && freeModule.require && freeModule.require('util').types;

            if (types) {
              return types;
            }

            // Legacy `process.binding('util')` for Node.js < 10.
            return freeProcess && freeProcess.binding && freeProcess.binding('util');
          } catch (e) {}
        })();

        module.exports = nodeUtil;

        /* WEBPACK VAR INJECTION */
      }.call(exports, __webpack_require__(20)(module)));

      /***/
    },
    /* 60 */
    /***/ function(module, exports, __webpack_require__) {
      var isObject = __webpack_require__(2),
        isPrototype = __webpack_require__(21),
        nativeKeysIn = __webpack_require__(61);

      /** Used for built-in method references. */
      var objectProto = Object.prototype;

      /** Used to check objects for own properties. */
      var hasOwnProperty = objectProto.hasOwnProperty;

      /**
       * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names.
       */
      function baseKeysIn(object) {
        if (!isObject(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object),
          result = [];

        for (var key in object) {
          if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
            result.push(key);
          }
        }
        return result;
      }

      module.exports = baseKeysIn;

      /***/
    },
    /* 61 */
    /***/ function(module, exports) {
      /**
       * This function is like
       * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
       * except that it includes inherited enumerable properties.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names.
       */
      function nativeKeysIn(object) {
        var result = [];
        if (object != null) {
          for (var key in Object(object)) {
            result.push(key);
          }
        }
        return result;
      }

      module.exports = nativeKeysIn;

      /***/
    },
    /* 62 */
    /***/ function(module, exports, __webpack_require__) {
      var apply = __webpack_require__(14),
        baseRest = __webpack_require__(12),
        isError = __webpack_require__(22);

      /**
       * Attempts to invoke `func`, returning either the result or the caught error
       * object. Any additional arguments are provided to `func` when it's invoked.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Util
       * @param {Function} func The function to attempt.
       * @param {...*} [args] The arguments to invoke `func` with.
       * @returns {*} Returns the `func` result or error object.
       * @example
       *
       * // Avoid throwing errors for invalid selectors.
       * var elements = _.attempt(function(selector) {
       *   return document.querySelectorAll(selector);
       * }, '>_>');
       *
       * if (_.isError(elements)) {
       *   elements = [];
       * }
       */
      var attempt = baseRest(function(func, args) {
        try {
          return apply(func, undefined, args);
        } catch (e) {
          return isError(e) ? e : new Error(e);
        }
      });

      module.exports = attempt;

      /***/
    },
    /* 63 */
    /***/ function(module, exports, __webpack_require__) {
      var baseGetTag = __webpack_require__(0),
        getPrototype = __webpack_require__(64),
        isObjectLike = __webpack_require__(1);

      /** `Object#toString` result references. */
      var objectTag = '[object Object]';

      /** Used for built-in method references. */
      var funcProto = Function.prototype,
        objectProto = Object.prototype;

      /** Used to resolve the decompiled source of functions. */
      var funcToString = funcProto.toString;

      /** Used to check objects for own properties. */
      var hasOwnProperty = objectProto.hasOwnProperty;

      /** Used to infer the `Object` constructor. */
      var objectCtorString = funcToString.call(Object);

      /**
       * Checks if `value` is a plain object, that is, an object created by the
       * `Object` constructor or one with a `[[Prototype]]` of `null`.
       *
       * @static
       * @memberOf _
       * @since 0.8.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       * }
       *
       * _.isPlainObject(new Foo);
       * // => false
       *
       * _.isPlainObject([1, 2, 3]);
       * // => false
       *
       * _.isPlainObject({ 'x': 0, 'y': 0 });
       * // => true
       *
       * _.isPlainObject(Object.create(null));
       * // => true
       */
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
        return (
          typeof Ctor == 'function' &&
          Ctor instanceof Ctor &&
          funcToString.call(Ctor) == objectCtorString
        );
      }

      module.exports = isPlainObject;

      /***/
    },
    /* 64 */
    /***/ function(module, exports, __webpack_require__) {
      var overArg = __webpack_require__(23);

      /** Built-in value references. */
      var getPrototype = overArg(Object.getPrototypeOf, Object);

      module.exports = getPrototype;

      /***/
    },
    /* 65 */
    /***/ function(module, exports, __webpack_require__) {
      var arrayMap = __webpack_require__(24);

      /**
       * The base implementation of `_.values` and `_.valuesIn` which creates an
       * array of `object` property values corresponding to the property names
       * of `props`.
       *
       * @private
       * @param {Object} object The object to query.
       * @param {Array} props The property names to get values for.
       * @returns {Object} Returns the array of property values.
       */
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }

      module.exports = baseValues;

      /***/
    },
    /* 66 */
    /***/ function(module, exports, __webpack_require__) {
      var eq = __webpack_require__(6);

      /** Used for built-in method references. */
      var objectProto = Object.prototype;

      /** Used to check objects for own properties. */
      var hasOwnProperty = objectProto.hasOwnProperty;

      /**
       * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
       * of source objects to the destination object for all destination properties
       * that resolve to `undefined`.
       *
       * @private
       * @param {*} objValue The destination value.
       * @param {*} srcValue The source value.
       * @param {string} key The key of the property to assign.
       * @param {Object} object The parent object of `objValue`.
       * @returns {*} Returns the value to assign.
       */
      function customDefaultsAssignIn(objValue, srcValue, key, object) {
        if (
          objValue === undefined ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))
        ) {
          return srcValue;
        }
        return objValue;
      }

      module.exports = customDefaultsAssignIn;

      /***/
    },
    /* 67 */
    /***/ function(module, exports) {
      /** Used to escape characters for inclusion in compiled string literals. */
      var stringEscapes = {
        '\\': '\\',
        "'": "'",
        '\n': 'n',
        '\r': 'r',
        '\u2028': 'u2028',
        '\u2029': 'u2029'
      };

      /**
       * Used by `_.template` to escape characters for inclusion in compiled string literals.
       *
       * @private
       * @param {string} chr The matched character to escape.
       * @returns {string} Returns the escaped character.
       */
      function escapeStringChar(chr) {
        return '\\' + stringEscapes[chr];
      }

      module.exports = escapeStringChar;

      /***/
    },
    /* 68 */
    /***/ function(module, exports, __webpack_require__) {
      var arrayLikeKeys = __webpack_require__(18),
        baseKeys = __webpack_require__(69),
        isArrayLike = __webpack_require__(7);

      /**
       * Creates an array of the own enumerable property names of `object`.
       *
       * **Note:** Non-object values are coerced to objects. See the
       * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
       * for more details.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Object
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.keys(new Foo);
       * // => ['a', 'b'] (iteration order is not guaranteed)
       *
       * _.keys('hi');
       * // => ['0', '1']
       */
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }

      module.exports = keys;

      /***/
    },
    /* 69 */
    /***/ function(module, exports, __webpack_require__) {
      var isPrototype = __webpack_require__(21),
        nativeKeys = __webpack_require__(70);

      /** Used for built-in method references. */
      var objectProto = Object.prototype;

      /** Used to check objects for own properties. */
      var hasOwnProperty = objectProto.hasOwnProperty;

      /**
       * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names.
       */
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result = [];
        for (var key in Object(object)) {
          if (hasOwnProperty.call(object, key) && key != 'constructor') {
            result.push(key);
          }
        }
        return result;
      }

      module.exports = baseKeys;

      /***/
    },
    /* 70 */
    /***/ function(module, exports, __webpack_require__) {
      var overArg = __webpack_require__(23);

      /* Built-in method references for those with the same name as other `lodash` methods. */
      var nativeKeys = overArg(Object.keys, Object);

      module.exports = nativeKeys;

      /***/
    },
    /* 71 */
    /***/ function(module, exports, __webpack_require__) {
      var escape = __webpack_require__(72),
        reEscape = __webpack_require__(77),
        reEvaluate = __webpack_require__(78),
        reInterpolate = __webpack_require__(25);

      /**
       * By default, the template delimiters used by lodash are like those in
       * embedded Ruby (ERB) as well as ES2015 template strings. Change the
       * following template settings to use alternative delimiters.
       *
       * @static
       * @memberOf _
       * @type {Object}
       */
      var templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: reEscape,

        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: reEvaluate,

        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: reInterpolate,

        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: '',

        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: { escape: escape }
        }
      };

      module.exports = templateSettings;

      /***/
    },
    /* 72 */
    /***/ function(module, exports, __webpack_require__) {
      var escapeHtmlChar = __webpack_require__(73),
        toString = __webpack_require__(26);

      /** Used to match HTML entities and HTML characters. */
      var reUnescapedHtml = /[&<>"']/g,
        reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

      /**
       * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
       * corresponding HTML entities.
       *
       * **Note:** No other characters are escaped. To escape additional
       * characters use a third-party library like [_he_](https://mths.be/he).
       *
       * Though the ">" character is escaped for symmetry, characters like
       * ">" and "/" don't need escaping in HTML and have no special meaning
       * unless they're part of a tag or unquoted attribute value. See
       * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
       * (under "semi-related fun fact") for more details.
       *
       * When working with HTML you should always
       * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
       * XSS vectors.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category String
       * @param {string} [string=''] The string to escape.
       * @returns {string} Returns the escaped string.
       * @example
       *
       * _.escape('fred, barney, & pebbles');
       * // => 'fred, barney, &amp; pebbles'
       */
      function escape(string) {
        string = toString(string);
        return string && reHasUnescapedHtml.test(string)
          ? string.replace(reUnescapedHtml, escapeHtmlChar)
          : string;
      }

      module.exports = escape;

      /***/
    },
    /* 73 */
    /***/ function(module, exports, __webpack_require__) {
      var basePropertyOf = __webpack_require__(74);

      /** Used to map characters to HTML entities. */
      var htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      };

      /**
       * Used by `_.escape` to convert characters to HTML entities.
       *
       * @private
       * @param {string} chr The matched character to escape.
       * @returns {string} Returns the escaped character.
       */
      var escapeHtmlChar = basePropertyOf(htmlEscapes);

      module.exports = escapeHtmlChar;

      /***/
    },
    /* 74 */
    /***/ function(module, exports) {
      /**
       * The base implementation of `_.propertyOf` without support for deep paths.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Function} Returns the new accessor function.
       */
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? undefined : object[key];
        };
      }

      module.exports = basePropertyOf;

      /***/
    },
    /* 75 */
    /***/ function(module, exports, __webpack_require__) {
      var Symbol = __webpack_require__(4),
        arrayMap = __webpack_require__(24),
        isArray = __webpack_require__(19),
        isSymbol = __webpack_require__(76);

      /** Used as references for various `Number` constants. */
      var INFINITY = 1 / 0;

      /** Used to convert symbols to primitives and strings. */
      var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

      /**
       * The base implementation of `_.toString` which doesn't convert nullish
       * values to empty strings.
       *
       * @private
       * @param {*} value The value to process.
       * @returns {string} Returns the string.
       */
      function baseToString(value) {
        // Exit early for strings to avoid a performance hit in some environments.
        if (typeof value == 'string') {
          return value;
        }
        if (isArray(value)) {
          // Recursively convert values (susceptible to call stack limits).
          return arrayMap(value, baseToString) + '';
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : '';
        }
        var result = value + '';
        return result == '0' && 1 / value == -INFINITY ? '-0' : result;
      }

      module.exports = baseToString;

      /***/
    },
    /* 76 */
    /***/ function(module, exports, __webpack_require__) {
      var baseGetTag = __webpack_require__(0),
        isObjectLike = __webpack_require__(1);

      /** `Object#toString` result references. */
      var symbolTag = '[object Symbol]';

      /**
       * Checks if `value` is classified as a `Symbol` primitive or object.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
       * @example
       *
       * _.isSymbol(Symbol.iterator);
       * // => true
       *
       * _.isSymbol('abc');
       * // => false
       */
      function isSymbol(value) {
        return typeof value == 'symbol' || (isObjectLike(value) && baseGetTag(value) == symbolTag);
      }

      module.exports = isSymbol;

      /***/
    },
    /* 77 */
    /***/ function(module, exports) {
      /** Used to match template delimiters. */
      var reEscape = /<%-([\s\S]+?)%>/g;

      module.exports = reEscape;

      /***/
    },
    /* 78 */
    /***/ function(module, exports) {
      /** Used to match template delimiters. */
      var reEvaluate = /<%([\s\S]+?)%>/g;

      module.exports = reEvaluate;

      /***/
    },
    /* 79 */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      // units.js
      // Unit configurations
      // Factor is with respect to meters/sqmeters

      exports.default = {
        acres: {
          factor: 0.00024711,
          display: 'acres',
          decimals: 2
        },
        feet: {
          factor: 3.2808,
          display: 'feet',
          decimals: 0
        },
        kilometers: {
          factor: 0.001,
          display: 'kilometers',
          decimals: 2
        },
        hectares: {
          factor: 0.0001,
          display: 'hectares',
          decimals: 2
        },
        meters: {
          factor: 1,
          display: 'meters',
          decimals: 0
        },
        miles: {
          factor: 3.2808 / 5280,
          display: 'miles',
          decimals: 2
        },
        sqfeet: {
          factor: 10.7639,
          display: 'sqfeet',
          decimals: 0
        },
        sqmeters: {
          factor: 1,
          display: 'sqmeters',
          decimals: 0
        },
        sqmiles: {
          factor: 0.000000386102,
          display: 'sqmiles',
          decimals: 2
        }
      };

      /***/
    },
    /* 80 */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      exports.default = calc;

      var _length = __webpack_require__(81);

      var _length2 = _interopRequireDefault(_length);

      var _area = __webpack_require__(84);

      var _area2 = _interopRequireDefault(_area);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      // calc.js
      // measure calculations

      function pad(num) {
        return num < 10 ? '0' + num.toString() : num.toString();
      }

      function ddToDms(coordinate, posSymbol, negSymbol) {
        var dd = Math.abs(coordinate),
          d = Math.floor(dd),
          m = Math.floor((dd - d) * 60),
          s = Math.round((dd - d - m / 60) * 3600 * 100) / 100,
          directionSymbol = dd === coordinate ? posSymbol : negSymbol;
        return pad(d) + '&deg; ' + pad(m) + "' " + pad(s) + '" ' + directionSymbol;
      }

      /* calc measurements for an array of points */
      function calc(latlngs) {
        var last = latlngs[latlngs.length - 1];
        var path = latlngs.map(function(latlng) {
          return [latlng.lat, latlng.lng];
        });

        var polyline = L.polyline(path),
          polygon = L.polygon(path);
        var meters = (0, _length2.default)(polyline.toGeoJSON(), { units: 'kilometers' }) * 1000;
        var sqMeters = (0, _area2.default)(polygon.toGeoJSON());

        var utm = proj4('EPSG:4326', 'EPSG:31983', [last.lng, last.lat]);

        return {
          lastCoord: {
            dd: {
              x: last.lng,
              y: last.lat
            },
            dms: {
              x: ddToDms(last.lng, 'E', 'W'),
              y: ddToDms(last.lat, 'N', 'S')
            },
            utm: {
              x: utm[0],
              y: utm[1]
            }
          },
          length: meters,
          area: sqMeters
        };
      }

      /***/
    },
    /* 81 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__turf_distance__ = __webpack_require__(
        82
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__turf_meta__ = __webpack_require__(27);
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__turf_helpers__ = __webpack_require__(3);

      /**
       * Takes a {@link GeoJSON} and measures its length in the specified units, {@link (Multi)Point}'s distance are ignored.
       *
       * @name length
       * @param {GeoJSON} geojson GeoJSON to measure
       * @param {Object} [options={}] Optional parameters
       * @param {string} [options.units=kilometers] can be degrees, radians, miles, or kilometers
       * @returns {number} length of GeoJSON
       * @example
       * var line = turf.lineString([[115, -32], [131, -22], [143, -25], [150, -34]]);
       * var length = turf.length(line, {units: 'miles'});
       *
       * //addToMap
       * var addToMap = [line];
       * line.properties.distance = length;
       */
      function length(geojson, options) {
        // Optional parameters
        options = options || {};
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__turf_helpers__['d' /* isObject */])(options))
          throw new Error('options is invalid');

        // Input Validation
        if (!geojson) throw new Error('geojson is required');

        // Calculate distance from 2-vertex line segements
        return Object(__WEBPACK_IMPORTED_MODULE_1__turf_meta__['b' /* segmentReduce */])(
          geojson,
          function(previousValue, segment) {
            var coords = segment.geometry.coordinates;
            return (
              previousValue +
              Object(__WEBPACK_IMPORTED_MODULE_0__turf_distance__['a' /* default */])(
                coords[0],
                coords[1],
                options
              )
            );
          },
          0
        );
      }

      /* harmony default export */ __webpack_exports__['default'] = length;

      /***/
    },
    /* 82 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__turf_invariant__ = __webpack_require__(
        83
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__turf_helpers__ = __webpack_require__(3);

      //http://en.wikipedia.org/wiki/Haversine_formula
      //http://www.movable-type.co.uk/scripts/latlong.html

      /**
       * Calculates the distance between two {@link Point|points} in degrees, radians,
       * miles, or kilometers. This uses the
       * [Haversine formula](http://en.wikipedia.org/wiki/Haversine_formula)
       * to account for global curvature.
       *
       * @name distance
       * @param {Coord} from origin point
       * @param {Coord} to destination point
       * @param {Object} [options={}] Optional parameters
       * @param {string} [options.units='kilometers'] can be degrees, radians, miles, or kilometers
       * @returns {number} distance between the two points
       * @example
       * var from = turf.point([-75.343, 39.984]);
       * var to = turf.point([-75.534, 39.123]);
       * var options = {units: 'miles'};
       *
       * var distance = turf.distance(from, to, options);
       *
       * //addToMap
       * var addToMap = [from, to];
       * from.properties.distance = distance;
       * to.properties.distance = distance;
       */
      function distance(from, to, options) {
        // Optional parameters
        options = options || {};
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__turf_helpers__['d' /* isObject */])(options))
          throw new Error('options is invalid');
        var units = options.units;

        var coordinates1 = Object(
          __WEBPACK_IMPORTED_MODULE_0__turf_invariant__['a' /* getCoord */]
        )(from);
        var coordinates2 = Object(
          __WEBPACK_IMPORTED_MODULE_0__turf_invariant__['a' /* getCoord */]
        )(to);
        var dLat = Object(__WEBPACK_IMPORTED_MODULE_1__turf_helpers__['a' /* degreesToRadians */])(
          coordinates2[1] - coordinates1[1]
        );
        var dLon = Object(__WEBPACK_IMPORTED_MODULE_1__turf_helpers__['a' /* degreesToRadians */])(
          coordinates2[0] - coordinates1[0]
        );
        var lat1 = Object(__WEBPACK_IMPORTED_MODULE_1__turf_helpers__['a' /* degreesToRadians */])(
          coordinates1[1]
        );
        var lat2 = Object(__WEBPACK_IMPORTED_MODULE_1__turf_helpers__['a' /* degreesToRadians */])(
          coordinates2[1]
        );

        var a =
          Math.pow(Math.sin(dLat / 2), 2) +
          Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);

        return Object(__WEBPACK_IMPORTED_MODULE_1__turf_helpers__['g' /* radiansToLength */])(
          2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)),
          units
        );
      }

      /* harmony default export */ __webpack_exports__['a'] = distance;

      /***/
    },
    /* 83 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'a', function() {
        return getCoord;
      });
      /* unused harmony export getCoords */
      /* unused harmony export containsNumber */
      /* unused harmony export geojsonType */
      /* unused harmony export featureOf */
      /* unused harmony export collectionOf */
      /* unused harmony export getGeom */
      /* unused harmony export getGeomType */
      /* unused harmony export getType */
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__turf_helpers__ = __webpack_require__(3);

      /**
       * Unwrap a coordinate from a Point Feature, Geometry or a single coordinate.
       *
       * @name getCoord
       * @param {Array<number>|Geometry<Point>|Feature<Point>} coord GeoJSON Point or an Array of numbers
       * @returns {Array<number>} coordinates
       * @example
       * var pt = turf.point([10, 10]);
       *
       * var coord = turf.getCoord(pt);
       * //= [10, 10]
       */
      function getCoord(coord) {
        if (!coord) throw new Error('coord is required');
        if (coord.type === 'Feature' && coord.geometry !== null && coord.geometry.type === 'Point')
          return coord.geometry.coordinates;
        if (coord.type === 'Point') return coord.coordinates;
        if (
          Array.isArray(coord) &&
          coord.length >= 2 &&
          coord[0].length === undefined &&
          coord[1].length === undefined
        )
          return coord;

        throw new Error('coord must be GeoJSON Point or an Array of numbers');
      }

      /**
       * Unwrap coordinates from a Feature, Geometry Object or an Array
       *
       * @name getCoords
       * @param {Array<any>|Geometry|Feature} coords Feature, Geometry Object or an Array
       * @returns {Array<any>} coordinates
       * @example
       * var poly = turf.polygon([[[119.32, -8.7], [119.55, -8.69], [119.51, -8.54], [119.32, -8.7]]]);
       *
       * var coords = turf.getCoords(poly);
       * //= [[[119.32, -8.7], [119.55, -8.69], [119.51, -8.54], [119.32, -8.7]]]
       */
      function getCoords(coords) {
        if (!coords) throw new Error('coords is required');

        // Feature
        if (coords.type === 'Feature' && coords.geometry !== null)
          return coords.geometry.coordinates;

        // Geometry
        if (coords.coordinates) return coords.coordinates;

        // Array of numbers
        if (Array.isArray(coords)) return coords;

        throw new Error('coords must be GeoJSON Feature, Geometry Object or an Array');
      }

      /**
       * Checks if coordinates contains a number
       *
       * @name containsNumber
       * @param {Array<any>} coordinates GeoJSON Coordinates
       * @returns {boolean} true if Array contains a number
       */
      function containsNumber(coordinates) {
        if (
          coordinates.length > 1 &&
          Object(__WEBPACK_IMPORTED_MODULE_0__turf_helpers__['c' /* isNumber */])(coordinates[0]) &&
          Object(__WEBPACK_IMPORTED_MODULE_0__turf_helpers__['c' /* isNumber */])(coordinates[1])
        ) {
          return true;
        }

        if (Array.isArray(coordinates[0]) && coordinates[0].length) {
          return containsNumber(coordinates[0]);
        }
        throw new Error('coordinates must only contain numbers');
      }

      /**
       * Enforce expectations about types of GeoJSON objects for Turf.
       *
       * @name geojsonType
       * @param {GeoJSON} value any GeoJSON object
       * @param {string} type expected GeoJSON type
       * @param {string} name name of calling function
       * @throws {Error} if value is not the expected type.
       */
      function geojsonType(value, type, name) {
        if (!type || !name) throw new Error('type and name required');

        if (!value || value.type !== type) {
          throw new Error(
            'Invalid input to ' + name + ': must be a ' + type + ', given ' + value.type
          );
        }
      }

      /**
       * Enforce expectations about types of {@link Feature} inputs for Turf.
       * Internally this uses {@link geojsonType} to judge geometry types.
       *
       * @name featureOf
       * @param {Feature} feature a feature with an expected geometry type
       * @param {string} type expected GeoJSON type
       * @param {string} name name of calling function
       * @throws {Error} error if value is not the expected type.
       */
      function featureOf(feature, type, name) {
        if (!feature) throw new Error('No feature passed');
        if (!name) throw new Error('.featureOf() requires a name');
        if (!feature || feature.type !== 'Feature' || !feature.geometry) {
          throw new Error('Invalid input to ' + name + ', Feature with geometry required');
        }
        if (!feature.geometry || feature.geometry.type !== type) {
          throw new Error(
            'Invalid input to ' + name + ': must be a ' + type + ', given ' + feature.geometry.type
          );
        }
      }

      /**
       * Enforce expectations about types of {@link FeatureCollection} inputs for Turf.
       * Internally this uses {@link geojsonType} to judge geometry types.
       *
       * @name collectionOf
       * @param {FeatureCollection} featureCollection a FeatureCollection for which features will be judged
       * @param {string} type expected GeoJSON type
       * @param {string} name name of calling function
       * @throws {Error} if value is not the expected type.
       */
      function collectionOf(featureCollection, type, name) {
        if (!featureCollection) throw new Error('No featureCollection passed');
        if (!name) throw new Error('.collectionOf() requires a name');
        if (!featureCollection || featureCollection.type !== 'FeatureCollection') {
          throw new Error('Invalid input to ' + name + ', FeatureCollection required');
        }
        for (var i = 0; i < featureCollection.features.length; i++) {
          var feature = featureCollection.features[i];
          if (!feature || feature.type !== 'Feature' || !feature.geometry) {
            throw new Error('Invalid input to ' + name + ', Feature with geometry required');
          }
          if (!feature.geometry || feature.geometry.type !== type) {
            throw new Error(
              'Invalid input to ' +
                name +
                ': must be a ' +
                type +
                ', given ' +
                feature.geometry.type
            );
          }
        }
      }

      /**
       * Get Geometry from Feature or Geometry Object
       *
       * @param {Feature|Geometry} geojson GeoJSON Feature or Geometry Object
       * @returns {Geometry|null} GeoJSON Geometry Object
       * @throws {Error} if geojson is not a Feature or Geometry Object
       * @example
       * var point = {
       *   "type": "Feature",
       *   "properties": {},
       *   "geometry": {
       *     "type": "Point",
       *     "coordinates": [110, 40]
       *   }
       * }
       * var geom = turf.getGeom(point)
       * //={"type": "Point", "coordinates": [110, 40]}
       */
      function getGeom(geojson) {
        if (!geojson) throw new Error('geojson is required');
        if (geojson.geometry !== undefined) return geojson.geometry;
        if (geojson.coordinates || geojson.geometries) return geojson;
        throw new Error('geojson must be a valid Feature or Geometry Object');
      }

      /**
       * Get Geometry Type from Feature or Geometry Object
       *
       * @throws {Error} **DEPRECATED** in v5.0.0 in favor of getType
       */
      function getGeomType() {
        throw new Error(
          'invariant.getGeomType has been deprecated in v5.0 in favor of invariant.getType'
        );
      }

      /**
       * Get GeoJSON object's type, Geometry type is prioritize.
       *
       * @param {GeoJSON} geojson GeoJSON object
       * @param {string} [name="geojson"] name of the variable to display in error message
       * @returns {string} GeoJSON type
       * @example
       * var point = {
       *   "type": "Feature",
       *   "properties": {},
       *   "geometry": {
       *     "type": "Point",
       *     "coordinates": [110, 40]
       *   }
       * }
       * var geom = turf.getType(point)
       * //="Point"
       */
      function getType(geojson, name) {
        if (!geojson) throw new Error((name || 'geojson') + ' is required');
        // GeoJSON Feature & GeometryCollection
        if (geojson.geometry && geojson.geometry.type) return geojson.geometry.type;
        // GeoJSON Geometry & FeatureCollection
        if (geojson.type) return geojson.type;
        throw new Error((name || 'geojson') + ' is invalid');
      }

      /***/
    },
    /* 84 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__turf_meta__ = __webpack_require__(27);

      /**
       * Takes one or more features and returns their area in square meters.
       *
       * @name area
       * @param {GeoJSON} geojson input GeoJSON feature(s)
       * @returns {number} area in square meters
       * @example
       * var polygon = turf.polygon([[[125, -15], [113, -22], [154, -27], [144, -15], [125, -15]]]);
       *
       * var area = turf.area(polygon);
       *
       * //addToMap
       * var addToMap = [polygon]
       * polygon.properties.area = area
       */
      function area(geojson) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__turf_meta__['a' /* geomReduce */])(
          geojson,
          function(value, geom) {
            return value + calculateArea(geom);
          },
          0
        );
      }

      var RADIUS = 6378137;
      // var FLATTENING_DENOM = 298.257223563;
      // var FLATTENING = 1 / FLATTENING_DENOM;
      // var POLAR_RADIUS = RADIUS * (1 - FLATTENING);

      /**
       * Calculate Area
       *
       * @private
       * @param {GeoJSON} geojson GeoJSON
       * @returns {number} area
       */
      function calculateArea(geojson) {
        var area = 0,
          i;
        switch (geojson.type) {
          case 'Polygon':
            return polygonArea(geojson.coordinates);
          case 'MultiPolygon':
            for (i = 0; i < geojson.coordinates.length; i++) {
              area += polygonArea(geojson.coordinates[i]);
            }
            return area;
          case 'Point':
          case 'MultiPoint':
          case 'LineString':
          case 'MultiLineString':
            return 0;
          case 'GeometryCollection':
            for (i = 0; i < geojson.geometries.length; i++) {
              area += calculateArea(geojson.geometries[i]);
            }
            return area;
        }
      }

      function polygonArea(coords) {
        var area = 0;
        if (coords && coords.length > 0) {
          area += Math.abs(ringArea(coords[0]));
          for (var i = 1; i < coords.length; i++) {
            area -= Math.abs(ringArea(coords[i]));
          }
        }
        return area;
      }

      /**
       * @private
       * Calculate the approximate area of the polygon were it projected onto the earth.
       * Note that this area will be positive if ring is oriented clockwise, otherwise it will be negative.
       *
       * Reference:
       * Robert. G. Chamberlain and William H. Duquette, "Some Algorithms for Polygons on a Sphere", JPL Publication 07-03, Jet Propulsion
       * Laboratory, Pasadena, CA, June 2007 http://trs-new.jpl.nasa.gov/dspace/handle/2014/40409
       *
       * @param {Array<Array<number>>} coords Ring Coordinates
       * @returns {number} The approximate signed geodesic area of the polygon in square meters.
       */
      function ringArea(coords) {
        var p1;
        var p2;
        var p3;
        var lowerIndex;
        var middleIndex;
        var upperIndex;
        var i;
        var area = 0;
        var coordsLength = coords.length;

        if (coordsLength > 2) {
          for (i = 0; i < coordsLength; i++) {
            if (i === coordsLength - 2) {
              // i = N-2
              lowerIndex = coordsLength - 2;
              middleIndex = coordsLength - 1;
              upperIndex = 0;
            } else if (i === coordsLength - 1) {
              // i = N-1
              lowerIndex = coordsLength - 1;
              middleIndex = 0;
              upperIndex = 1;
            } else {
              // i = 0 to N-3
              lowerIndex = i;
              middleIndex = i + 1;
              upperIndex = i + 2;
            }
            p1 = coords[lowerIndex];
            p2 = coords[middleIndex];
            p3 = coords[upperIndex];
            area += (rad(p3[0]) - rad(p1[0])) * Math.sin(rad(p2[1]));
          }

          area = (area * RADIUS * RADIUS) / 2;
        }

        return area;
      }

      function rad(_) {
        return (_ * Math.PI) / 180;
      }

      /* harmony default export */ __webpack_exports__['default'] = area;

      /***/
    },
    /* 85 */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      exports.selectOne = selectOne;
      exports.selectAll = selectAll;
      exports.hide = hide;
      exports.show = show;
      // dom.js
      // utility functions for managing DOM elements

      function selectOne(selector, el) {
        if (!el) {
          el = document;
        }
        return el.querySelector(selector);
      }

      function selectAll(selector, el) {
        if (!el) {
          el = document;
        }
        return Array.prototype.slice.call(el.querySelectorAll(selector));
      }

      function hide(el) {
        if (el) {
          el.setAttribute('style', 'display:none;');
          return el;
        }
      }

      function show(el) {
        if (el) {
          el.removeAttribute('style');
          return el;
        }
      }

      /***/
    },
    /* 86 */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _createClass = (function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      })();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      var DEFAULT_OPTIONS = {
        activeColor: '#ABE67E',
        completedColor: '#C8F2BE'
      };

      var Symbology = (function() {
        function Symbology(options) {
          _classCallCheck(this, Symbology);

          this._options = L.extend({}, DEFAULT_OPTIONS, this._options, options);
        }

        _createClass(Symbology, [
          {
            key: 'getSymbol',
            value: function getSymbol(name) {
              var symbols = {
                measureDrag: {
                  clickable: false,
                  radius: 4,
                  color: this._options.activeColor,
                  weight: 2,
                  opacity: 0.7,
                  fillColor: this._options.activeColor,
                  fillOpacity: 0.5,
                  className: 'layer-measuredrag'
                },
                measureArea: {
                  clickable: false,
                  stroke: false,
                  fillColor: this._options.activeColor,
                  fillOpacity: 0.2,
                  className: 'layer-measurearea'
                },
                measureBoundary: {
                  clickable: false,
                  color: this._options.activeColor,
                  weight: 2,
                  opacity: 0.9,
                  fill: false,
                  className: 'layer-measureboundary'
                },
                measureVertex: {
                  clickable: false,
                  radius: 4,
                  color: this._options.activeColor,
                  weight: 2,
                  opacity: 1,
                  fillColor: this._options.activeColor,
                  fillOpacity: 0.7,
                  className: 'layer-measurevertex'
                },
                measureVertexActive: {
                  clickable: false,
                  radius: 4,
                  color: this._options.activeColor,
                  weight: 2,
                  opacity: 1,
                  fillColor: this._options.activeColor,
                  fillOpacity: 1,
                  className: 'layer-measurevertex active'
                },
                resultArea: {
                  clickable: true,
                  color: this._options.completedColor,
                  weight: 2,
                  opacity: 0.9,
                  fillColor: this._options.completedColor,
                  fillOpacity: 0.2,
                  className: 'layer-measure-resultarea'
                },
                resultLine: {
                  clickable: true,
                  color: this._options.completedColor,
                  weight: 3,
                  opacity: 0.9,
                  fill: false,
                  className: 'layer-measure-resultline'
                },
                resultPoint: {
                  clickable: true,
                  radius: 4,
                  color: this._options.completedColor,
                  weight: 2,
                  opacity: 1,
                  fillColor: this._options.completedColor,
                  fillOpacity: 0.7,
                  className: 'layer-measure-resultpoint'
                }
              };
              return symbols[name];
            }
          }
        ]);

        return Symbology;
      })();

      exports.default = Symbology;

      /***/
    },
    /* 87 */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      exports.numberFormat = numberFormat;
      // NOTE. inspired from https://github.com/taijinlee/humanize
      function numberFormat(number) {
        var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
        var decPoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
        var thousandsSep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ',';

        var sign = number < 0 ? '-' : '';
        var num = Math.abs(+number || 0);
        var intPart = parseInt(num.toFixed(decimals), 10) + '';
        var j = intPart.length > 3 ? intPart.length % 3 : 0;

        return [
          sign,
          j ? intPart.substr(0, j) + thousandsSep : '',
          intPart.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousandsSep),
          decimals
            ? '' +
              decPoint +
              Math.abs(num - intPart)
                .toFixed(decimals)
                .slice(2)
            : ''
        ].join('');
      }

      /***/
    },
    /* 88 */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _controlTemplate = __webpack_require__(89);

      Object.defineProperty(exports, 'controlTemplate', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_controlTemplate).default;
        }
      });

      var _resultsTemplate = __webpack_require__(90);

      Object.defineProperty(exports, 'resultsTemplate', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_resultsTemplate).default;
        }
      });

      var _pointPopupTemplate = __webpack_require__(91);

      Object.defineProperty(exports, 'pointPopupTemplate', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_pointPopupTemplate).default;
        }
      });

      var _linePopupTemplate = __webpack_require__(92);

      Object.defineProperty(exports, 'linePopupTemplate', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_linePopupTemplate).default;
        }
      });

      var _areaPopupTemplate = __webpack_require__(93);

      Object.defineProperty(exports, 'areaPopupTemplate', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_areaPopupTemplate).default;
        }
      });

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      /***/
    },
    /* 89 */
    /***/ function(module, exports, __webpack_require__) {
      module.exports =
        '<a class="{{ model.className }}-toggle js-toggle" href="#" title="' +
        'Medidas de distâncias e áreas' +
        '">' +
        'Medidas' +
        '</a>\n<div class="{{ model.className }}-interaction js-interaction">\n  <div class="js-startprompt startprompt">\n    <h3>' +
        'Medidas de distâncias e áreas' +
        '</h3>\n    <ul class="tasks">\n      <a href="#" class="js-start start">' +
        'Criar nova medida' +
        '</a>\n    </ul>\n  </div>\n  <div class="js-measuringprompt">\n    <h3>' +
        'Medidas de distâncias e áreas' +
        '</h3>\n    <p class="js-starthelp">' +
        'Comece criando uma medida, adicionando pontos no mapa' +
        '</p>\n    <div class="js-results results"></div>\n    <ul class="js-measuretasks tasks">\n      <li><a href="#" class="js-cancel cancel">' +
        'Cancelar' +
        '</a></li>\n      <li><a href="#" class="js-finish finish">' +
        'Finalizar medida' +
        '</a></li>\n    </ul>\n  </div>\n</div>\n';

      /***/
    },
    /* 90 */
    /***/ function(module, exports, __webpack_require__) {
      module.exports =
        '<script>\n\n</script>\n<div class="group">\n  <p class="lastpoint heading">' +
        'Último ponto' +
        ':</p>\n  <p>Coordenadas Geográficas (Grau Minuto Segundo): <br> <b>{{ model.lastCoord.dms.y }} <span class="coorddivider">/</span> {{ model.lastCoord.dms.x }} <span class="material-icons copy-coord" title="Copiar coordenadas para área de transferência" onclick="L.control.measure.copyToClipboard(\'geogms-coord\')">\n    content_copy\n    </span> <span id="geogms-coord" style="display: none;">{{ model.lastCoord.dms.x }},{{ model.lastCoord.dms.y }}</span></b></p>\n  <p>Coordenadas Geográficas (Grau Decimal): <br> <b>{{ numberFormat(model.lastCoord.dd.y, 6) }} <span class="coorddivider">/</span> {{ numberFormat(model.lastCoord.dd.x, 6) }} <span class="material-icons copy-coord" title="Copiar coordenadas para área de transferência" onclick="L.control.measure.copyToClipboard(\'geodec-coord\')">\n    content_copy\n    </span> <span id="geodec-coord" style="display: none;">{{ numberFormat(model.lastCoord.dd.x, 6) }},{{ numberFormat(model.lastCoord.dd.y, 6) }}</span></b></p>\n  <p>Coordenadas UTM Zona 23S - SIRGAS2000 (metros): <br> <b>{{ model.lastCoord.utm.y.toFixed(4) }} <span class=coorddivider>/</span> {{ model.lastCoord.utm.x.toFixed(4) }} <span class="material-icons copy-coord" title="Copiar coordenadas para área de transferência" onclick="L.control.measure.copyToClipboard(\'utm-coord\')">\n    content_copy\n    </span> <span id="utm-coord" style="display: none;">{{ model.lastCoord.utm.x.toFixed(4) }},{{ model.lastCoord.utm.y.toFixed(4) }}</span> </b></p>\n</div>\n<% if (model.pointCount > 1) { %>\n<div class="group">\n  <p class="heading">' +
        'Distância' +
        ':</p> <br> <b>{{ model.lengthDisplay }}</b>\n</div>\n<% } %>\n<% if (model.pointCount > 2) { %>\n<div class="group">\n  <p class="heading">' +
        'Área' +
        ':</p> <br> <b> {{ model.areaDisplay }}</b>\n</div>\n<% } %>\n';

      /***/
    },
    /* 91 */
    /***/ function(module, exports, __webpack_require__) {
      module.exports =
        '<h3 id="header-drag-handle">' +
        'Localização do ponto' +
        '</h3>\n<p>{{ model.lastCoord.dms.y }} <span class="coorddivider">/</span> {{ model.lastCoord.dms.x }}</p>\n<p>{{ numberFormat(model.lastCoord.dd.y, 6) }} <span class="coorddivider">/</span> {{ numberFormat(model.lastCoord.dd.x, 6) }}</p>\n<ul class="tasks">\n  <li><a href="#" class="js-zoomto zoomto">' +
        'Centralizar' +
        '</a></li>\n  <li><a href="#" class="js-deletemarkup deletemarkup">' +
        'Excluir' +
        '</a></li>\n</ul>\n';

      /***/
    },
    /* 92 */
    /***/ function(module, exports, __webpack_require__) {
      module.exports =
        '<h3 id="header-drag-handle">' +
        'Medida' +
        '</h3>\n<p>Distância: {{ model.lengthDisplay }}</p>\n<br>\n<p><div id="coordinates-div" style="display: none;">\n  <p> Coordenadas</p>\n  <p>\n    <table>\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Geográfico (Lat)</th>\n          <th>Geográfico (Long)</th>\n          <th>Metros (X)</th>\n          <th>Metros (Y)</th>\n        </tr>\n      </thead>\n      <tbody id="coordinates-tbody">\n        \n      </tbody>    \n    </table>\n    <p class="info-p">* Geográfico: LatLong - WGS84 (EPSG:4326)</p>\n    <p class="info-p">* Metros: UTM 23S - SIRGAS2000 (EPSG:31983)</p>\n  </p>\n</div>\n\n</p>\n<ul class="tasks">\n  <li><a href="#" class="js-zoomto zoomto" title="Centralizar na feição">' +
        'Centralizar' +
        '</a></li>\n  <li><a href="#" class="js-coordinates coordinates" title="Ver Coordenadas">Coordenadas</a></li>\n  <li><a href="#" class="js-deletemarkup deletemarkup" title="Apagar medidas">' +
        'Excluir' +
        '</a></li>\n</ul>\n';

      /***/
    },
    /* 93 */
    /***/ function(module, exports, __webpack_require__) {
      module.exports =
        '<h3 id="header-drag-handle">' +
        'Medida' +
        '</h3>\n<p>Área: {{ model.areaDisplay }}</p>\n<p>Perímetro: {{ model.lengthDisplay }}</p>\n<br>\n<p><div id="coordinates-div" style="display: none;">\n  <p> Coordenadas</p>\n  <p>\n    <table>\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Geográfico (Lat)</th>\n          <th>Geográfico (Long)</th>\n          <th>Metros (X)</th>\n          <th>Metros (Y)</th>\n        </tr>\n      </thead>\n      <tbody id="coordinates-tbody">\n        \n      </tbody>    \n    </table>\n    <p class="info-p">* Geográfico: LatLong - WGS84 (EPSG:4326)</p>\n    <p class="info-p">* Metros: UTM 23S - SIRGAS2000 (EPSG:31983)</p>\n  </p>\n</div>\n\n</p>\n<ul class="tasks">\n  <li><a href="#" class="js-zoomto zoomto" title="Centralizar na feição">' +
        'Centralizar' +
        '</a></li>\n  <li><a href="#" class="js-coordinates coordinates" title="Ver Coordenadas">Coordenadas</a></li>\n  <li><a href="#" class="js-deletemarkup deletemarkup" title="Apagar medidas">' +
        'Excluir' +
        '</a></li>\n</ul>\n\n';

      /***/
    }
    /******/
  ]
);
