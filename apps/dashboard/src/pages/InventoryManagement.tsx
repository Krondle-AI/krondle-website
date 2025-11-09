import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@krondle/common/components/ui/button";
import { Input } from "@krondle/common/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@krondle/common/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@krondle/common/components/ui/dialog";
import { Label } from "@krondle/common/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@krondle/common/components/ui/table";
import { Badge } from "@krondle/common/components/ui/badge";
import { Search, Package, AlertTriangle, TrendingUp, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  category: string;
  quantity: number;
  minStock: number;
  cost: number;
  price: number;
  supplier: string;
}

const InventoryManagement = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Shampoo Premium",
      category: "Cuidado Capilar",
      quantity: 45,
      minStock: 20,
      cost: 8.5,
      price: 15.0,
      supplier: "Beauty Supplies Ltd",
    },
    {
      id: 2,
      name: "Condicionador",
      category: "Cuidado Capilar",
      quantity: 15,
      minStock: 20,
      cost: 7.0,
      price: 12.0,
      supplier: "Beauty Supplies Ltd",
    },
    {
      id: 3,
      name: "Cera Modeladora",
      category: "Styling",
      quantity: 8,
      minStock: 10,
      cost: 5.5,
      price: 10.0,
      supplier: "Style Products Inc",
    },
    {
      id: 4,
      name: "Tinta Capilar",
      category: "Coloração",
      quantity: 32,
      minStock: 15,
      cost: 12.0,
      price: 25.0,
      supplier: "Color Pro",
    },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    quantity: "",
    minStock: "",
    cost: "",
    price: "",
    supplier: "",
  });

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.category || !newProduct.quantity || !newProduct.cost) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios",
        variant: "destructive",
      });
      return;
    }

    const product: Product = {
      id: products.length + 1,
      name: newProduct.name,
      category: newProduct.category,
      quantity: Number(newProduct.quantity),
      minStock: Number(newProduct.minStock) || 10,
      cost: Number(newProduct.cost),
      price: Number(newProduct.price),
      supplier: newProduct.supplier,
    };

    setProducts([...products, product]);
    setNewProduct({
      name: "",
      category: "",
      quantity: "",
      minStock: "",
      cost: "",
      price: "",
      supplier: "",
    });

    toast({
      title: "Produto adicionado",
      description: `${product.name} foi adicionado ao inventário`,
    });
  };

  const getStockStatus = (quantity: number, minStock: number) => {
    if (quantity === 0) return { label: "Esgotado", color: "bg-destructive" };
    if (quantity <= minStock) return { label: "Baixo", color: "bg-yellow-500" };
    return { label: "Normal", color: "bg-green-500" };
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const lowStockProducts = products.filter((p) => p.quantity <= p.minStock);
  const totalValue = products.reduce((acc, p) => acc + p.quantity * p.cost, 0);
  const potentialRevenue = products.reduce((acc, p) => acc + p.quantity * p.price, 0);

  return (
    <>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="container mx-auto px-6 pt-24 pb-12 animate-fade-in">
          <Breadcrumb />
          <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Gestão de Inventário
          </h1>
          <p className="text-muted-foreground">
            Controle seu estoque de produtos e materiais
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Valor Total</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">€{totalValue.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">Valor em estoque</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Alertas</CardTitle>
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{lowStockProducts.length}</div>
              <p className="text-xs text-muted-foreground">Produtos com estoque baixo</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receita Potencial</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">€{potentialRevenue.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">Se vendido ao preço de venda</p>
            </CardContent>
          </Card>
        </div>

        {lowStockProducts.length > 0 && (
          <Card className="mb-6 border-yellow-500/50 bg-yellow-500/5">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                <CardTitle>Produtos com Estoque Baixo</CardTitle>
              </div>
              <CardDescription>
                Os seguintes produtos precisam ser repostos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {lowStockProducts.map((product) => (
                  <div key={product.id} className="flex items-center justify-between p-3 rounded-lg bg-background">
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                    </div>
                    <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                      {product.quantity} unidades restantes
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle>Produtos</CardTitle>
                <CardDescription>Lista completa do inventário</CardDescription>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Buscar produtos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Adicionar Produto
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Adicionar Novo Produto</DialogTitle>
                      <DialogDescription>
                        Preencha os dados do novo produto
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-2 gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Nome do Produto *</Label>
                        <Input
                          id="name"
                          value={newProduct.name}
                          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                          placeholder="Nome do produto"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="category">Categoria *</Label>
                        <Input
                          id="category"
                          value={newProduct.category}
                          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                          placeholder="Ex: Cuidado Capilar"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="quantity">Quantidade *</Label>
                        <Input
                          id="quantity"
                          type="number"
                          value={newProduct.quantity}
                          onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
                          placeholder="0"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="minStock">Estoque Mínimo</Label>
                        <Input
                          id="minStock"
                          type="number"
                          value={newProduct.minStock}
                          onChange={(e) => setNewProduct({ ...newProduct, minStock: e.target.value })}
                          placeholder="10"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="cost">Custo (€) *</Label>
                        <Input
                          id="cost"
                          type="number"
                          step="0.01"
                          value={newProduct.cost}
                          onChange={(e) => setNewProduct({ ...newProduct, cost: e.target.value })}
                          placeholder="0.00"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="price">Preço de Venda (€)</Label>
                        <Input
                          id="price"
                          type="number"
                          step="0.01"
                          value={newProduct.price}
                          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                          placeholder="0.00"
                        />
                      </div>
                      <div className="grid gap-2 col-span-2">
                        <Label htmlFor="supplier">Fornecedor</Label>
                        <Input
                          id="supplier"
                          value={newProduct.supplier}
                          onChange={(e) => setNewProduct({ ...newProduct, supplier: e.target.value })}
                          placeholder="Nome do fornecedor"
                        />
                      </div>
                    </div>
                    <Button onClick={handleAddProduct} className="w-full">
                      Adicionar Produto
                    </Button>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Produto</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Quantidade</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Custo</TableHead>
                    <TableHead>Preço</TableHead>
                    <TableHead>Fornecedor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => {
                    const status = getStockStatus(product.quantity, product.minStock);
                    return (
                      <TableRow key={product.id}>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>{product.quantity} un.</TableCell>
                        <TableCell>
                          <Badge className={status.color}>
                            {status.label}
                          </Badge>
                        </TableCell>
                        <TableCell>€{product.cost.toFixed(2)}</TableCell>
                        <TableCell>€{product.price.toFixed(2)}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {product.supplier}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default InventoryManagement;
