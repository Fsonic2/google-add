<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Property;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PropertyController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Property::latest()->paginate(9));
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'price' => ['required', 'numeric', 'min:0'],
            'location' => ['required', 'string', 'max:255'],
            'bedrooms' => ['required', 'integer', 'min:0'],
            'bathrooms' => ['required', 'integer', 'min:0'],
            'area_sqft' => ['required', 'integer', 'min:1'],
            'image_url' => ['nullable', 'url'],
        ]);

        $property = Property::create($validated);

        return response()->json($property, 201);
    }

    public function show(Property $property): JsonResponse
    {
        return response()->json($property);
    }

    public function update(Request $request, Property $property): JsonResponse
    {
        $validated = $request->validate([
            'title' => ['sometimes', 'required', 'string', 'max:255'],
            'description' => ['sometimes', 'required', 'string'],
            'price' => ['sometimes', 'required', 'numeric', 'min:0'],
            'location' => ['sometimes', 'required', 'string', 'max:255'],
            'bedrooms' => ['sometimes', 'required', 'integer', 'min:0'],
            'bathrooms' => ['sometimes', 'required', 'integer', 'min:0'],
            'area_sqft' => ['sometimes', 'required', 'integer', 'min:1'],
            'image_url' => ['nullable', 'url'],
        ]);

        $property->update($validated);

        return response()->json($property);
    }

    public function destroy(Property $property): JsonResponse
    {
        $property->delete();

        return response()->json(status: 204);
    }
}
