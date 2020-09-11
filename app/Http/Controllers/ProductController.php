<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $manufacturersID = $request->manufacturers;
        $platformsID = $request->platforms;
        $typesID = $request->types;

        $products = Product::with([
                'manufacturer',
                'platform',
                'type',
            ]
        )
            ->whereHas('manufacturer', $this->filteringCallback($manufacturersID))
            ->whereHas('platform', $this->filteringCallback($platformsID))
            ->whereHas('type', $this->filteringCallback($typesID))
            ->get();

        $allowedPlatforms = [];
        $allowedTypes = [];
        foreach ($products as $product) {
            $platformId = $product->platform->id;
            if (!in_array($platformId, $allowedPlatforms)) {
                $allowedPlatforms[] = $platformId;
            }

            $typeId = $product->type->id;
            if (!in_array($typeId, $allowedTypes)) {
                $allowedTypes[] = $typeId;
            }
        }
        return compact(
            'products',
            'allowedPlatforms',
            'allowedTypes'
        );
    }

    public function filteringCallback($Ids)
    {
        return function ($q) use ($Ids) {
            if ($Ids) {
                return $q->whereIn('id', $Ids);
            }
            return $q;
        };
    }
}
