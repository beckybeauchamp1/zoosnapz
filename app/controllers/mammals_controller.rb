class MammalsController < ApplicationController
  before_action do
    if params[:id]
      @zoo = Zoo.find(params[:id])
      @mammal = Mammal.find(params[:id])
    end
  end

  def index
    @mammals = @zoo.mammals
    respond_to do |format|
      format.html
      format.json{ render json: @mammals, status: :ok }
    end
  end

  def show
    render json: @mammal, status: :ok
  end

end
